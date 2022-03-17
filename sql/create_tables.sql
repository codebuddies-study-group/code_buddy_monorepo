CREATE TABLE IF NOT EXISTS public.user (
    id INT NOT NULL,
    name varchar(250) NOT NULL,
    email varchar(250) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS public."language"(
    id int NOT NULL,
    email varchar NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."user_language" (
    id int NOT NULL,
    user_id int NOT NULL,
    language_id int NOT NULL,
    CONSTRAINT user_language_pk PRIMARY KEY (id),
    CONSTRAINT user_language_fk_1 FOREIGN KEY (language_id) REFERENCES public."language"(id) ON DELETE CASCADE,
    CONSTRAINT user_language_fk FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.meeting (
    id int NOT NULL,
    topic varchar NOT NULL,
    url varchar NOT NULL,
    "date" date NOT NULL,
    CONSTRAINT meeting_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.user_meeting (
    id int NOT NULL,
    user_id int NOT NULL,
    meeting_id int NOT NULL,
    CONSTRAINT user_meeting_pk PRIMARY KEY (id),
    CONSTRAINT user_meeting_fk FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE,
    CONSTRAINT user_meeting_fk_1 FOREIGN KEY (meeting_id) REFERENCES public.meeting(id) ON DELETE CASCADE
);