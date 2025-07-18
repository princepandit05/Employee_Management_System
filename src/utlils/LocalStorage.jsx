
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Sales Report",
        "description": "Compile Q2 sales data and prepare summary report.",
        "date": "2025-06-17",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Client Follow-up",
        "description": "Follow up with client regarding new project proposal.",
        "date": "2025-06-16",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Update Website",
        "description": "Add new product listings to the website.",
        "date": "2025-06-15",
        "category": "Web Development"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Vihaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Inventory Check",
        "description": "Audit warehouse inventory.",
        "date": "2025-06-17",
        "category": "Operations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team Meeting",
        "description": "Attend weekly operations sync meeting.",
        "date": "2025-06-16",
        "category": "Meetings"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Ishaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [],
    "taskNumbers": {
      "active": 0,
      "newTask": 0,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Ananya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Design New Logo",
        "description": "Create branding logo concepts for new product line.",
        "date": "2025-06-17",
        "category": "Design"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Diya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Social Media Campaign",
        "description": "Plan and draft posts for July campaign.",
        "date": "2025-06-17",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Data Backup",
        "description": "Perform backup of company data storage.",
        "date": "2025-06-16",
        "category": "IT Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Customer Survey",
        "description": "Collect and analyze customer feedback.",
        "date": "2025-06-15",
        "category": "Research"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];
export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
   
}
