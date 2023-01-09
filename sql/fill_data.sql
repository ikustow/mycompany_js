-- FILL "roles"
DO
$$
    begin
        if not exists
            (select 1
             from roles
             where id = 1
            )
        then
           insert into roles (id, description)
   			 values (1, 'admin');
			insert into roles (id, description)
   			 values (2, 'user');
        end if;
    end
$$;


-- FILL "users"
DO
$$
    begin
        if not exists
            (select 1
             from users
             where id = 1
            )
        then
         insert into public.users(
	        id, email, password, roles_id)
	        values (1, 'admin@company.com', 'admin', 1);

         insert into public.users(
	        id, email, password, roles_id)
        	values (2, 'user@company.com', 'user', 2);
        end if;
    end
$$;


-- FILL "department"
DO
$$
    begin
        if not exists
            (select 1
             from department
             where id = 1
            )
        then
         insert into public.department(
	        id, description, code)
	        values (1, 'main', '00001');

        insert into public.department(
	        id, description, code)
	        values (2, 'devs', '00002');

	    insert into public.department(
	        id, description, code)
	        values (3, 'marketing', '00003');
        end if;
    end
$$;

-- FILL "employee"
DO
$$
    begin
        if not exists
            (select 1
             from public.employee
             where id = 1
            )
        then
          INSERT INTO public.employee(
	        id, name, surname, users_id, departments_id)
	        VALUES (1, 'Admin', 'Jones', '1', '1');
        end if;
    end
$$;


-- FILL "actions"
DO
$$
    begin
        if not exists
            (select 1
             from public.action
             where id = 1
            )
        then
           insert into action (id, icon)
   			 values (1, 'home');
			 insert into action (id, icon)
   			 values (2, 'break');
   			  insert into action (id, icon)
   			 values (3, 'workhard');
   			  insert into action (id, icon)
   			 values (4, 'dinner');
        end if;
    end
$$;