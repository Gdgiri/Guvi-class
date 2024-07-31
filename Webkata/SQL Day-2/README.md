# Database Schema for Learning Management System

## Overview

This database schema is designed for a Learning Management System (LMS) that tracks domains, batches, learners, attendance, fees, tasks, leaderboards, capstones, mentors, and mentor salaries.

## Tables and Relationships

1. Domain

This table stores information about different learning domains.

- Table Name: `domain`
- Columns:
  - `dom_id` (INT, Primary Key): Unique identifier for the domain.
  - `dom_name` (VARCHAR(25)): Name of the domain.

```sql
CREATE TABLE domain(
  dom_id INT PRIMARY KEY,
  dom_name VARCHAR(25)
);
```

2. Batch

This table stores information about different batches.

- Table Name: `batch`
- Columns:
  - `batch_id` (INT, Primary Key): Unique identifier for the batch.
  - `batch_name` (VARCHAR(25)): Name of the batch.

```sql
CREATE TABLE batch(
  batch_id INT PRIMARY KEY,
  batch_name VARCHAR(25)
);
```

3. Learner

This table stores information about learners and their associations with domains and batches.

- Table Name: `learner`
- Columns:
  - `learner_id` (INT, Primary Key): Unique identifier for the learner.
  - `learner_name` (VARCHAR(25)): Name of the learner.
  - `dom_id` (INT, Foreign Key): References `domain(dom_id)`.
  - `batch_id` (INT, Foreign Key): References `batch(batch_id)`.

```sql
CREATE TABLE learner(
  learner_id INT PRIMARY KEY,
  learner_name VARCHAR(25),
  dom_id INT,
  FOREIGN KEY(dom_id) REFERENCES domain(dom_id),
  batch_id INT,
  FOREIGN KEY(batch_id) REFERENCES batch(batch_id)
);
```

4. Attendance

This table tracks attendance records for learners in specific batches.

- Table Name: `attendance`
- Columns:
  - `attendance_id` (INT, Primary Key): Unique identifier for the attendance record.
  - `learner_id` (INT, Foreign Key): References `learner(learner_id)`.
  - `batch_id` (INT, Foreign Key): References `batch(batch_id)`.
  - `status` (VARCHAR(10)): Attendance status (e.g., Present, Absent).

```sql
CREATE TABLE attendance(
  attendance_id INT PRIMARY KEY,
  learner_id INT,
  FOREIGN KEY(learner_id) REFERENCES learner(learner_id),
  batch_id INT,
  FOREIGN KEY(batch_id) REFERENCES batch(batch_id),
  status VARCHAR(10)
);
```

5. Fees

This table tracks fees paid by learners for specific batches.

- Table Name: `fees`
- Columns:
  - `learner_id` (INT, Foreign Key): References `learner(learner_id)`.
  - `batch_id` (INT, Foreign Key): References `batch(batch_id)`.
  - `fees_amt` (INT): Amount of fees paid.

```sql
CREATE TABLE fees(
  learner_id INT,
  FOREIGN KEY(learner_id) REFERENCES learner(learner_id),
  batch_id INT,
  FOREIGN KEY(batch_id) REFERENCES batch(batch_id),
  fees_amt INT
);
```

6. Task

This table stores information about tasks assigned to learners in specific batches.

- Table Name: `task`
- Columns:
  - `task_id` (INT, Primary Key): Unique identifier for the task.
  - `task_name` (VARCHAR(25)): Name of the task.
  - `learner_id` (INT, Foreign Key): References `learner(learner_id)`.
  - `batch_id` (INT, Foreign Key): References `batch(batch_id)`.

```sql
CREATE TABLE task(
  task_id INT PRIMARY KEY,
  task_name VARCHAR(25),
  learner_id INT,
  FOREIGN KEY(learner_id) REFERENCES learner(learner_id),
  batch_id INT,
  FOREIGN KEY(batch_id) REFERENCES batch(batch_id)
);
```

7. Leaderboard

This table tracks the leaderboard rankings of learners in specific batches.

- Table Name: `leaderboard`
- Columns:
  - `leader_rank` (INT, Primary Key): Rank of the learner.
  - `learner_id` (INT, Foreign Key): References `learner(learner_id)`.
  - `batch_id` (INT, Foreign Key): References `batch(batch_id)`.
  - `points` (INT): Points scored by the learner.

```sql
CREATE TABLE leaderboard(
  leader_rank INT PRIMARY KEY,
  learner_id INT,
  FOREIGN KEY(learner_id) REFERENCES learner(learner_id),
  batch_id INT,
  FOREIGN KEY(batch_id) REFERENCES batch(batch_id),
  points INT
);
```

8. Capstone

This table stores information about capstone projects completed by learners in specific batches.

- Table Name: `capstone`
- Columns:
  - `capstone_id` (INT, Primary Key): Unique identifier for the capstone project.
  - `capstone_name` (VARCHAR(25)): Name of the capstone project.
  - `learner_id` (INT, Foreign Key): References `learner(learner_id)`.
  - `batch_id` (INT, Foreign Key): References `batch(batch_id)`.

```sql
CREATE TABLE capstone(
  capstone_id INT PRIMARY KEY,
  capstone_name VARCHAR(25),
  learner_id INT,
  FOREIGN KEY(learner_id) REFERENCES learner(learner_id),
  batch_id INT,
  FOREIGN KEY(batch_id) REFERENCES batch(batch_id)
);
```

9. Mentor

This table stores information about mentors and their associated batches.

- Table Name: `mentor`
- Columns:
  - `mentor_id` (INT, Primary Key): Unique identifier for the mentor.
  - `mentor_name` (VARCHAR(25)): Name of the mentor.
  - `batch_id` (INT, Foreign Key): References `batch(batch_id)`.

```sql
CREATE TABLE mentor(
  mentor_id INT PRIMARY KEY,
  mentor_name VARCHAR(25),
  batch_id INT,
  FOREIGN KEY(batch_id) REFERENCES batch(batch_id)
);
```

10. Mentor Salary

This table tracks the salaries of mentors.

- Table Name: `mentorsalary`
- Columns:
  - `mentor_id` (INT, Foreign Key): References `mentor(mentor_id)`.
  - `mentor_salary` (INT): Salary of the mentor.

```sql
CREATE TABLE mentorsalary(
  mentor_id INT,
  FOREIGN KEY(mentor_id) REFERENCES mentor(mentor_id),
  mentor_salary INT
);
```

-- Relationships--

- `learner(dom_id)` references `domain(dom_id)`
- `learner(batch_id)` references `batch(batch_id)`
- `attendance(learner_id)` references `learner(learner_id)`
- `attendance(batch_id)` references `batch(batch_id)`
- `fees(learner_id)` references `learner(learner_id)`
- `fees(batch_id)` references `batch(batch_id)`
- `task(learner_id)` references `learner(learner_id)`
- `task(batch_id)` references `batch(batch_id)`
- `leaderboard(learner_id)` references `learner(learner_id)`
- `leaderboard(batch_id)` references `batch(batch_id)`
- `capstone(learner_id)` references `learner(learner_id)`
- `capstone(batch_id)` references `batch(batch_id)`
- `mentor(batch_id)` references `batch(batch_id)`
- `mentorsalary(mentor_id)` references `mentor(mentor_id)`
