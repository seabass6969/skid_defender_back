create table skid_question_mc (ID SERIAL PRIMARY KEY, QUESTION VARCHAR(255) UNIQUE NOT NULL, A VARCHAR(25), B VARCHAR(25), C VARCHAR(25), D VARCHAR(25));
insert into skid_question_mc (ID,question,a,b,c,d,ans) values (2,'what is an example of a linux shell', 'hash', 'cash', 'bash', 'jash', 'c')
