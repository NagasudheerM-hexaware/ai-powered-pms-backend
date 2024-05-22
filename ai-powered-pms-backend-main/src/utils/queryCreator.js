function queryCreator(query) {
    const dbQuery = {};
    // const dbQuery = { isMentor: true };
    if (query) {
      if (query.manager_id) {
        dbQuery.managerId = query.manager_id;
      }
      if (query.department_id) {
        dbQuery.departmentId = query.department_id;
      }if (query.user_id) {
        dbQuery.userId = query.user_id;
      }
      if (query.employee_id) {
        dbQuery.employeeId = query.employee_id;
      }
      if (query.type) {
        dbQuery.type = query.type;
      }
      
      if (query.goal_type) {
        dbQuery.goals= { $elemMatch: { goalType: query.goal_type } };
    }

     
    }
  
    return dbQuery;
  }
  
  module.exports = queryCreator;
  