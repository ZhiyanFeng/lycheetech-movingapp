-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Lookup Tables
CREATE TABLE vehicle_statuses (
                                  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                                  name VARCHAR(50) NOT NULL UNIQUE,
                                  description TEXT
);

CREATE TABLE rfq_statuses (
                              id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                              name VARCHAR(50) NOT NULL UNIQUE,
                              description TEXT
);

CREATE TABLE bid_statuses (
                              id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                              name VARCHAR(50) NOT NULL UNIQUE,
                              description TEXT
);

CREATE TABLE order_statuses (
                                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                                name VARCHAR(50) NOT NULL UNIQUE,
                                description TEXT
);

CREATE TABLE payment_statuses (
                                  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                                  name VARCHAR(50) NOT NULL UNIQUE,
                                  description TEXT
);

CREATE TABLE invoice_statuses (
                                  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                                  name VARCHAR(50) NOT NULL UNIQUE,
                                  description TEXT
);
-- Add regions lookup table after other lookup tables
CREATE TABLE regions (
                         id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                         name VARCHAR(100) NOT NULL UNIQUE,
                         description TEXT,
                         created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial regions
INSERT INTO regions (name, description) VALUES
                                            ('GREATER_TORONTO_AREA', 'Greater Toronto Area'),
                                            ('DOWNTOWN_TORONTO', 'Downtown Toronto core'),
                                            ('NORTH_YORK', 'North York region'),
                                            ('SCARBOROUGH', 'Scarborough region'),
                                            ('ETOBICOKE', 'Etobicoke region'),
                                            ('MISSISSAUGA', 'Mississauga area'),
                                            ('BRAMPTON', 'Brampton area'),
                                            ('MARKHAM', 'Markham area'),
                                            ('VAUGHAN', 'Vaughan area');


-- Add indexes
CREATE INDEX idx_mover_regions_mover ON mover_regions(mover_id);
CREATE INDEX idx_mover_regions_region ON mover_regions(region_id);




-- Insert initial values
INSERT INTO vehicle_statuses (name) VALUES ('ACTIVE'), ('MAINTENANCE'), ('INACTIVE');
INSERT INTO rfq_statuses (name) VALUES ('OPEN'), ('ASSIGNED'), ('COMPLETED'), ('CANCELLED');
INSERT INTO bid_statuses (name) VALUES ('PENDING'), ('ACCEPTED'), ('REJECTED');
INSERT INTO order_statuses (name) VALUES ('SCHEDULED'), ('IN_PROGRESS'), ('COMPLETED'), ('CANCELLED');
INSERT INTO payment_statuses (name) VALUES ('PENDING'), ('PAID'), ('FAILED'), ('REFUNDED');
INSERT INTO invoice_statuses (name) VALUES ('ISSUED'), ('PAID'), ('OVERDUE'), ('CANCELLED');

-- Tables
CREATE TABLE users (
                       id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                       name VARCHAR(255) NOT NULL,
                       email VARCHAR(255) NOT NULL,
                       created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                       phone_number VARCHAR(50),
                       address TEXT
);

CREATE TABLE services (
                          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                          name VARCHAR(100) NOT NULL UNIQUE,
                          description TEXT,
                          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO services (name, description) VALUES
                                             ('RESIDENTIAL_MOVING', 'Full-service residential moving'),
                                             ('SMALL_MOVING', 'Small items and furniture moving'),
                                             ('TRASH_GARBAGE', 'Trash and garbage removal'),
                                             ('PICKUP_DROPOFF', 'Quick pick-up and drop-off service');

CREATE TABLE movers (
                        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                        name VARCHAR(255) NOT NULL,
                        company_name VARCHAR(255),
                        email VARCHAR(255) NOT NULL,
                        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        phone_number VARCHAR(50),
                        address TEXT,
                        description TEXT,
                        service_region UUID[],
                        avatar_url TEXT,
                        vehicle_url TEXT
);

CREATE TABLE mover_regions (
                               mover_id UUID NOT NULL REFERENCES movers(id) ON DELETE CASCADE,
                               region_id UUID NOT NULL REFERENCES regions(id) ON DELETE CASCADE,
                               PRIMARY KEY (mover_id, region_id)
);

CREATE TABLE mover_services (
                                mover_id UUID NOT NULL REFERENCES movers(id) ON DELETE CASCADE,
                                service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
                                PRIMARY KEY (mover_id, service_id)
);

CREATE TABLE vehicles (
                          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                          mover_id UUID NOT NULL REFERENCES movers(id) ON DELETE CASCADE,
                          make VARCHAR(100) NOT NULL,
                          model VARCHAR(100) NOT NULL,
                          year INTEGER NOT NULL,
                          license_plate VARCHAR(50) NOT NULL,
                          capacity DECIMAL(10,2) NOT NULL,
                          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                          status_id UUID NOT NULL REFERENCES vehicle_statuses(id)
);

CREATE TABLE rfqs (
                      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                      service_id UUID REFERENCES services(id),
                      origin_address TEXT NOT NULL,
                      destination_address TEXT NOT NULL,
                      move_date DATE NOT NULL,
                      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                      status_id UUID NOT NULL REFERENCES rfq_statuses(id),
                      description TEXT,
                      item_details TEXT
);

CREATE TABLE bids (
                      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                      mover_id UUID NOT NULL REFERENCES movers(id) ON DELETE CASCADE,
                      rfq_id UUID NOT NULL REFERENCES rfqs(id) ON DELETE CASCADE,
                      amount DECIMAL(10,2) NOT NULL,
                      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                      status_id UUID NOT NULL REFERENCES bid_statuses(id),
                      details TEXT
);

CREATE TABLE orders (
                        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                        rfq_id UUID NOT NULL REFERENCES rfqs(id) ON DELETE CASCADE,
                        mover_id UUID NOT NULL REFERENCES movers(id) ON DELETE CASCADE,
                        bid_id UUID NOT NULL REFERENCES bids(id) ON DELETE CASCADE,
                        vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
                        start_date DATE NOT NULL,
                        status_id UUID NOT NULL REFERENCES order_statuses(id),
                        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        completion_date DATE,
                        notes TEXT
);

CREATE TABLE inventory (
                           id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                           order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
                           name VARCHAR(255) NOT NULL,
                           quantity INTEGER NOT NULL,
                           description TEXT
);

CREATE TABLE payments (
                          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                          order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
                          amount DECIMAL(10,2) NOT NULL,
                          payment_type VARCHAR(100) NOT NULL,
                          payment_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                          status_id UUID NOT NULL REFERENCES payment_statuses(id),
                          transaction_id VARCHAR(255)
);

CREATE TABLE invoices (
                          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                          order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
                          amount_due DECIMAL(10,2) NOT NULL,
                          due_date DATE NOT NULL,
                          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                          status_id UUID NOT NULL REFERENCES invoice_statuses(id),
                          issue_date DATE NOT NULL,
                          payment_id UUID REFERENCES payments(id) ON DELETE SET NULL
);

-- Indexes for better query performance
CREATE INDEX idx_vehicles_mover ON vehicles(mover_id);
CREATE INDEX idx_vehicles_status ON vehicles(status_id);
CREATE INDEX idx_rfqs_user ON rfqs(user_id);
CREATE INDEX idx_rfqs_status ON rfqs(status_id);
CREATE INDEX idx_rfqs_service ON rfqs(service_id);
CREATE INDEX idx_bids_mover ON bids(mover_id);
CREATE INDEX idx_bids_rfq ON bids(rfq_id);
CREATE INDEX idx_bids_status ON bids(status_id);
CREATE INDEX idx_orders_rfq ON orders(rfq_id);
CREATE INDEX idx_orders_mover ON orders(mover_id);
CREATE INDEX idx_orders_status ON orders(status_id);
CREATE INDEX idx_inventory_order ON inventory(order_id);
CREATE INDEX idx_payments_order ON payments(order_id);
CREATE INDEX idx_payments_status ON payments(status_id);
CREATE INDEX idx_invoices_order ON invoices(order_id);
CREATE INDEX idx_invoices_status ON invoices(status_id);
CREATE INDEX idx_mover_services_mover ON mover_services(mover_id);
CREATE INDEX idx_mover_services_service ON mover_services(service_id);
CREATE INDEX idx_mover_regions_mover ON mover_regions(mover_id);
CREATE INDEX idx_mover_regions_region ON mover_regions(region_id);

