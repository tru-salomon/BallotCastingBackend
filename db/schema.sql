DROP DATABASE BALLOT_CASTING_SYS;

CREATE DATABASE BALLOT_CASTING_SYS;

\c ballot_casting_sys;

DROP TABLE MEMBERS;

CREATE TABLE MEMBERS (
    ID SERIAL PRIMARY KEY,
    FIRST_NAME VARCHAR(255) NOT NULL,
    LAST_NAME VARCHAR(255) NOT NULL,
    DOB DATE NOT NULL,
    EMAIL VARCHAR(255) NOT NULL,
    PASSWORD VARCHAR(255) NOT NULL,
    PHONE_NUMBER VARCHAR(255) NOT NULL,
    USER_ID VARCHAR(255) NOT NULL,
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE BALLOTS;

CREATE TABLE BALLOTS (
    ID SERIAL PRIMARY KEY,
    UUID VARCHAR(255) NOT NULL,
    USER_ID VARCHAR(255) NOT NULL,
    BALLOT VARCHAR(255) NOT NULL,
    VOTE_1 VARCHAR(255) NOT NULL,
    VOTE_2 VARCHAR(255) NOT NULL,
    VOTE_3 VARCHAR(255) NOT NULL,
    VOTE_4 VARCHAR(255) NOT NULL,
    VOTE_5 VARCHAR(255) NOT NULL,
    VOTE_6 VARCHAR(255) NOT NULL,
    VOTE_7 VARCHAR(255) NOT NULL,
    VOTE_8 VARCHAR(255) NOT NULL,
    VOTE_9 VARCHAR(255) NOT NULL
);

-- CREATE TABLE IF NOT EXISTS TALLY (
--     ID SERIAL PRIMARY KEY,
--     USER_ID VARCHAR(255) NOT NULL,
--     TOTAL_VOTES INT NOT NULL,
-- );