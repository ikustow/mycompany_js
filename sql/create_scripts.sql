
-- CREATE "roles" table if it is not exist
DO
$$
    BEGIN
        IF NOT EXISTS
            (SELECT 1
             FROM information_schema.tables
             WHERE table_schema = 'public'
               AND table_name = 'roles'
            )
        THEN
            CREATE TABLE roles
            (
                id                  INTEGER PRIMARY KEY,
                description         VARCHAR(50) NOT NULL
            );
        END IF;
    END
$$;
-- CREATE "department" table if it is not exist
DO
$$
    BEGIN
        IF NOT EXISTS
            (SELECT 1
             FROM information_schema.tables
             WHERE table_schema = 'public'
               AND table_name = 'department'
            )
        THEN
            CREATE TABLE department
            (
                id                  INTEGER PRIMARY KEY,
                description         VARCHAR(50) NOT NULL,
                code                VARCHAR(50) NOT NULL
            );
        END IF;
    END
$$;


-- CREATE "users" table if it is not exist
DO
$$
    BEGIN
        IF NOT EXISTS
            (SELECT 1
             FROM information_schema.tables
             WHERE table_schema = 'public'
               AND table_name = 'users'
            )
        THEN
            CREATE TABLE users
            (
                id                  INTEGER PRIMARY KEY,
                email               VARCHAR(50) NOT NULL,
                password            VARCHAR(50) NOT NULL,
                roles_id integer REFERENCES roles (id)
            );
        END IF;
    END
$$;


-- CREATE "employee" table if it is not exist
DO
$$
    BEGIN
        IF NOT EXISTS
            (SELECT 1
             FROM information_schema.tables
             WHERE table_schema = 'public'
               AND table_name = 'employee'
            )
        THEN
            CREATE TABLE employee
            (
                id                  INTEGER PRIMARY KEY,
                name               VARCHAR(50) NOT NULL,
                surname            VARCHAR(50) NOT NULL,
                users_id integer REFERENCES users (id)
                departments_id integer REFERENCES departments (id)
            );
        END IF;
    END
$$;


-- CREATE "action" table if it is not exist
DO
$$
    BEGIN
        IF NOT EXISTS
            (SELECT 1
             FROM information_schema.tables
             WHERE table_schema = 'public'
               AND table_name = 'action'
            )
        THEN
            CREATE TABLE action
            (
                id                  INTEGER PRIMARY KEY,
                icon                VARCHAR(100) NOT NULL
            );
        END IF;
    END
$$;


-- CREATE "states" table if it is not exist
DO
$$
    BEGIN
        IF NOT EXISTS
            (SELECT 1
             FROM information_schema.tables
             WHERE table_schema = 'public'
               AND table_name = 'states'
            )
        THEN
            CREATE TABLE states
            (
                id                  INTEGER PRIMARY KEY,
                users_id integer REFERENCES users (id),
                action_id integer REFERENCES action (id)
            );
        END IF;
    END
$$;
