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

     
    }
  
    return dbQuery;
  }
  
  module.exports = queryCreator;
  