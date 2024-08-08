Here's a README file that explains each query and how to use it:

---

# MongoDB Queries README

This README provides details on various MongoDB queries used for managing and analyzing data in our database.

## Collections

### 1. `users`

Stores user details such as name, password, role, and enrolled courses.

### 2. `codekata`

Stores information about coding problems solved by users on Codekata.

### 3. `attendance`

Tracks the attendance status of users on specific dates.

### 4. `topics`

Contains details about topics taught, including the date they were taught.

### 5. `tasks`

Records tasks assigned to users, including due dates and submission status.

### 6. `company_driver`

Lists company drives and the students who appeared for these drives.

### 7. `mentors`

Contains details about mentors, including their mentees and batch.

## Queries

### 1. Find all the topics and tasks taught in October

**Query for Topics:**

```javascript
db.topics
  .find({
    taught_date: {
      $gte: ISODate("2020-10-01T00:00:00Z"),
      $lt: ISODate("2020-11-01T00:00:00Z"),
    },
  })
  .pretty();
```

**Query for Tasks:**

```javascript
db.tasks
  .find({
    assigned_date: {
      $gte: ISODate("2020-10-01T00:00:00Z"),
      $lt: ISODate("2020-11-01T00:00:00Z"),
    },
  })
  .pretty();
```

### 2. Find all the company drives which appeared between 15 Oct 2020 and 31 Oct 2020

**Query:**

```javascript
db.company_driver
  .find({
    date: {
      $gte: ISODate("2020-10-15T00:00:00Z"),
      $lt: ISODate("2020-11-01T00:00:00Z"),
    },
  })
  .pretty();
```

### 3. Find all the company drives and students who appeared for the placement

**Query:**

```javascript
db.company_driver
  .aggregate([
    {
      $lookup: {
        from: "users",
        localField: "students_appeared",
        foreignField: "_id",
        as: "students_details",
      },
    },
  ])
  .pretty();
```

### 4. Find the number of problems solved by each user in Codekata

**Query:**

```javascript
db.codekata
  .aggregate([
    { $match: { solved: true } },
    { $group: { _id: "$user_id", solved_count: { $sum: 1 } } },
  ])
  .pretty();
```

### 5. Find all the mentors with more than 15 mentees

**Query:**

```javascript
db.mentors
  .aggregate([
    {
      $project: {
        name: 1,
        mentees_count: { $size: "$memtees" },
      },
    },
    {
      $match: {
        mentees_count: { $gt: 15 },
      },
    },
  ])
  .pretty();
```

### 6. Find the number of users who are absent and have not submitted tasks between 15 Oct 2020 and 31 Oct 2020

**Query:**

```javascript
db.attendence
  .aggregate([
    {
      $match: {
        status: "absent",
        date: {
          $gte: ISODate("2020-10-15T00:00:00Z"),
          $lt: ISODate("2020-11-01T00:00:00Z"),
        },
      },
    },
    {
      $group: {
        _id: "$user_id",
      },
    },
  ])
  .pretty();
```

---

### Notes

- **Dates**: Ensure that dates are in ISO format and the time zone is UTC.
- **ObjectId**: Replace placeholder `ObjectId` values with actual values from your database.
- **Fields**: Adjust field names if they differ from those used in these queries.

This README helps to understand and execute various MongoDB queries effectively for data analysis and reporting.
