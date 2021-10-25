--
-- PostgreSQL database dump
--

-- Dumped from database version 12.8 (Ubuntu 12.8-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.8 (Ubuntu 12.8-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: registers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.registers (
    id integer NOT NULL,
    "userId" integer,
    date date,
    "typeId" integer,
    description text,
    value integer
);


ALTER TABLE public.registers OWNER TO postgres;

--
-- Name: registersTypes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."registersTypes" (
    id integer NOT NULL,
    type text
);


ALTER TABLE public."registersTypes" OWNER TO postgres;

--
-- Name: registersTypes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."registersTypes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."registersTypes_id_seq" OWNER TO postgres;

--
-- Name: registersTypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."registersTypes_id_seq" OWNED BY public."registersTypes".id;


--
-- Name: registers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.registers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.registers_id_seq OWNER TO postgres;

--
-- Name: registers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.registers_id_seq OWNED BY public.registers.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer,
    token text
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text,
    email text,
    password text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: registers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.registers ALTER COLUMN id SET DEFAULT nextval('public.registers_id_seq'::regclass);


--
-- Name: registersTypes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."registersTypes" ALTER COLUMN id SET DEFAULT nextval('public."registersTypes_id_seq"'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: registers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.registers (id, "userId", date, "typeId", description, value) FROM stdin;
1	1	2021-10-22	2	lanchinho gostoso	3252
2	1	2021-10-22	1	caiu o salario	375000
3	1	2021-10-22	1	Combustível	5000
4	1	2021-10-22	2	Combustível	15000
5	1	2021-10-22	2	Padaria	1500
6	1	2021-10-22	1	Vendi paçoca	2000
7	1	2021-10-23	2	Almoço	2500
8	1	2021-10-23	1	Agiota	50000
9	1	2021-10-23	2	Cervejinha	4500
10	1	2021-10-23	2	churrasco	6000
11	1	2021-10-23	2	Cabeleireiro  	5000
12	1	2021-10-23	1	Divida	50000
13	1	2021-10-24	1	Ganhei dinheiro	5000
14	3	2021-10-25	1	Salario	500000
15	1	2021-10-25	2	Combustível	2000
16	1	2021-10-25	1	Bônus	20000
17	1	2021-10-25	1	teste	5000
18	1	2021-10-25	1	teste	200
19	1	2021-10-25	1	teste	5
20	1	2021-10-25	1	teste	50
21	1	2021-10-25	1	teste	585
22	1	2021-10-25	2	cervejinha	2000
23	1	2021-10-25	2	balinha	50
24	6	2021-10-25	1	Salario caiu	600000
\.


--
-- Data for Name: registersTypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."registersTypes" (id, type) FROM stdin;
1	entry
2	exit
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, "userId", token) FROM stdin;
77	71	5d85db91-85c0-4ae3-a732-8dfea553e63b
78	73	190b0b89-e21d-4649-9fca-8882b99aa90b
81	76	3510894e-fe74-42df-a701-59a8847baf6e
52	1	df258191-bd33-46f3-826f-8dc729483e47
53	3	be01ca21-ab04-4c04-bd1f-4493805f2c46
54	1	82c76d4f-692d-44b4-9d7a-2369c7b7b6c7
55	1	e26d3344-cc24-4f8e-a3e8-0b319ff20c10
56	1	d95a8d23-09d0-4a5f-8555-b20fbfc12b33
57	1	0cf50111-f2b6-4a7a-aa82-8f9ebbdd5bd6
58	44	54b3fa1e-a078-4571-950e-348d7a29e501
59	46	2f0c28fa-5a49-4f0c-bffb-1c29fb29c7b2
60	47	241879e1-b15f-44e1-9f67-d6d08a815197
61	1	fa72ba8c-573a-46e6-b526-e692403f707a
62	50	5eeedad6-b898-4044-8e48-6f852d74d9d2
63	51	9330c504-f4b9-4bb5-a61b-43cd1d763070
64	54	2a110e27-5d43-4f9c-9869-debc89cf9e6c
65	55	88469c56-5934-4355-b8cb-d1601a6b9f21
66	57	cecb8ca5-929a-4101-99eb-7e22f259ba2d
67	59	432654af-cf73-497f-b11d-6d96f3787d60
68	61	9da7cdde-0b97-48a4-9585-af9d107e8012
69	64	a9d7e13d-5f7e-4090-be46-34094fed075a
71	65	139c4258-b61b-445e-96ee-5ed2974a6836
73	67	5c2e50aa-c2ac-4731-80da-3997d6425fd3
75	69	7327c9d6-b8f1-4894-91cd-c943f800367f
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password) FROM stdin;
1	Victor Durço	victor@durco.com	$2b$10$kMvaWxlwP476OK4k7WwPmupi2VK8t9VIyiKzHMBCanZx80HsbJU5G
2	Testano	teste@teste.com	$2b$10$w3dfurQqsPzQevgHkJTK9u75L.QFjzuIyNa2cTi0PZ0fIhk60ZCAm
3	Cleber	cleber@bambam.com	$2b$10$kc7K5So70Z9s7DWdX7lQwOgpNrQqUkJMYW3k3xK6ilISxaZqZEDE2
6	teste	teste@gmail.com	$2b$10$bJ.A92T2wSbAcL9s3BMxbedLErvF1Jxr/HJ/DjVoQdj8yS7xci9Um
\.


--
-- Name: registersTypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."registersTypes_id_seq"', 2, true);


--
-- Name: registers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.registers_id_seq', 24, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 81, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 76, true);


--
-- PostgreSQL database dump complete
--

