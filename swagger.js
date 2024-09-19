const swaggerAutogen = require("swagger-autogen")();
const config = require("config");
console.log("ENV", config.commonConfig.domain);
const doc = {
  info: {
    title: "My WG API",

    description: "Description",
  },
  //servers: [{ url: config.commonConfig.basePath}],
  host: config.commonConfig.domain,
  basePath: config.commonConfig.basePath,
  schemes: ["http", "https"],
  tags: [],
  securityDefinitions: {
    api_key: {
      type: "token",
      name: "x-access-token",
      in: "header",
    },
  },
  definitions: {},
};

const outputFile = "./swagger-output.json";

const endpointsFiles = [
  "./user/user.routes.ts",
  "./company/company.routes.ts",
  "./plant/plant.routes.ts",
  "./producttype/producttype.routes.ts",
  "./customer/customer.routes.ts",
  "./customertype/customertype.routes.ts",
  "./department/department.routes.ts",
  "./material/material.routes.ts",
  "./design/design.routes.ts",
  "./salary/salaryhead.routes.ts",
  "./holidays/holidays.routes.ts",
  "./design/design.routes.ts",
  "./employeetype/employeetype.routes.ts",
  "./designationmaster/designationmaster.routes.ts",
  "./leaveType/leavetype.routes.ts",
  "./designationmaster/designationmaster.routes.ts",
  "./departmentdesignation/departmentdesignation.routes.ts",
  "./employeemaster/employeemaster.routes.ts",
  "./checklistmaster/checklistmaster.routes.ts",
  "./purchaserequisition/purchaserequisition.routes.ts",
  "./resignation/resignation.routes.ts",

  "./ordertype/ordertype.routes.ts",
  "./salesorderchecklist/salesorderchecklist.routes.ts",
  "./salesorder/salesorder.routes.ts",
  "./purchaseorder/purchaseorder.routes.ts",
  "./suppliertype/suppliertype.routes.ts",
  "./purchasepartmaster/purchasepartmaster.routes.ts",
  "./suppliermaster/suppliermaster.routes.ts",
  "./instrumentMaster/instrumentMaster.routes.ts",
  "./instrumentType/instrumentType.routes.ts",
  "./materialQualityData/materialQualityData.routes.ts",

  "./storagelocationmaster/storagelocationmaster.routes.ts",
  "./binmaster/binmaster.routes.ts",
  "./mrptype/mrpType.routes.ts",
  "./mrpcategory/mrpCategory.routes.ts",
  "./materialplanningdata/materialplanningdata.routes.ts",
  "./inspectionLot/inspectionLot.routes.ts",
  "./deliverytypes/deliverytype.routes",
  "./ldclausemaster/ldclausemaster.routes",
  "./salesorderdocumentation/salesorderdocumentation.routes",
  "./purchaseExcelReport/purchaseExcelReport.routes",
  "./salesdocumentationdetail/salesdocumentationdetail.routes",
  "./salesdocumentationheader/salesdocumentationheader.routes",
  "./salesorderdetail/salesorderdetail.routes",
  "./reimbursement/reimbursement.routes.ts",
  "./salesexcelreport/salesexcelreport.routes",
  "./workstation/workstation.routes",
  "./productionoperators/productionoperators.routes",
  "./productionorderheader/productionorderheader.routes",
  "./productionorderrouting/productionorderrouting.routes",
];

swaggerAutogen(outputFile, endpointsFiles, doc);

// const outputFile = "./swagger_output.json";
// const endpointsFiles = ["./app/routes/users.js",
// "./app/routes/headOfDepartments",
// "./app/routes/teachers.js",
// "./app/routes/subjects.js",
// "./app/routes/students.js"];
