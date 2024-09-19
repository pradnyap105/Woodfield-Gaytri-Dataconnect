import express, { Express, Request, Response } from "express";
import swaggerDocument from "./swagger-output.json";
const swaggerUi = require("swagger-ui-express");
import cors from "cors";
import config from "config";
import userRouter from "./user/user.routes";
import companyRouter from "./company/company.routes";
import plantRouter from "./plant/plant.routes";
import productRouter from "./producttype/producttype.routes";
import { connectionResolver } from "./common/middleware/db-connection-resolver";
import DesignRouter from "./design/design.routes";
import customerRouter from "./customer/customer.routes";
import customerTypeRouter from "./customertype/customertype.routes";
import departmentRouter from "./department/department.routes";
import materialRouter from "./material/material.routes";
import salaryhead from "./salary/salaryhead.routes";
import holidays from "./holidays/holidays.routes"
import employeeTypeRouter from "./employeetype/employeetype.routes";
import designationMasterRouter from "./designationmaster/designationmaster.routes";
import leaveTypeHeadRouter from "./leaveType/leavetype.routes";
import departmentDesignationRouter from "./departmentdesignation/departmentdesignation.routes"
import employeeMasterRouter from "./employeemaster/employeemaster.routes"
import checklistMasterRouter from "./checklistmaster/checklistmaster.routes";
import purchaseRequisitionRouter from "./purchaserequisition/purchaserequisition.routes";
import ordertypeRouter from "./ordertype/ordertype.routes";
import salesOrderChecklistRouter from "./salesorderchecklist/salesorderchecklist.routes";
import salesOrderRouter from "./salesorder/salesorder.routes";
import purchaseOrderRouter from "./purchaseorder/purchaseorder.routes";
import supplierTypeRouter from "./suppliertype/suppliertype.routes";
import supplierRouter from "./suppliermaster/suppliermaster.routes";
import instrumentTypeRouter from "./instrumentType/instrumentType.routes";
import instrumentMasterRouter from "./instrumentMaster/instrumentMaster.routes";
import purchasePartMasterRouter from "./purchasepartmaster/purchasepartmaster.routes";
import materialQualityDataRouter from "./materialQualityData/materialQualityData.routes"
import StorageLocationMasterRouter from "./storagelocationmaster/storagelocationmaster.routes";
import BinMasterRouter from "./binmaster/binmaster.routes";
import mrpTypeRouter from "./mrptype/mrpType.routes"
import mrpCategoryRouter from "./mrpcategory/mrpCategory.routes";
import materialPlanningDataRouter from "./materialplanningdata/materialplanningdata.routes";
import inspectionLotRouter from "./inspectionLot/inspectionLot.routes";
import deliveryTypeRouter from "./deliverytypes/deliverytype.routes";
import ldClauseRouter from "./ldclausemaster/ldclausemaster.routes";
import SalesOrderDocumentationRouter from "./salesorderdocumentation/salesorderdocumentation.routes";
import excelReportRouter from "./purchaseExcelReport/purchaseExcelReport.routes";
import resignationRouter from "./resignation/resignation.routes";
import salesDocumentationDetailRouter from "./salesdocumentationdetail/salesdocumentationdetail.routes";
import salesDocumentationHeaderRouter from "./salesdocumentationheader/salesdocumentationheader.routes";
import salesOrderDetailRouter from "./salesorderdetail/salesorderdetail.routes";
import reimbursementRoute from "./reimbursement/reimbursement.routes";
import salesExcelReportRouter from "./salesexcelreport/salesexcelreport.routes";
import workStationRouter from "./workstation/workstation.routes";
import productionOperatorRouter from "./productionoperators/productionoperators.routes";
import productionOrderHeaderRouter from "./productionorderheader/productionorderheader.routes";
import productionOrderRoutingRouter from "./productionorderrouting/productionorderrouting.routes";
const httpContext = require("express-http-context");
const app: Express = express();
const port = config.get<number>("port");
app.use(cors<Request>());
app.use(express.json());
app.use(httpContext.middleware);
app.use(connectionResolver);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/user", userRouter);
app.use("/company", companyRouter);
app.use("/plant", plantRouter);
app.use("/design", DesignRouter)
app.use("/producttype", productRouter);
app.use("/customer", customerRouter);
app.use("/customertype", customerTypeRouter);
app.use("/department", departmentRouter);
app.use("/material", materialRouter);
app.use("/salary", salaryhead);
app.use("/holiday", holidays)
app.use("/employeeType", employeeTypeRouter);
app.use("/designationmaster", designationMasterRouter);
app.use("/leaveType", leaveTypeHeadRouter)
app.use("/designationmaster", designationMasterRouter)
app.use("/departmendesignation", departmentDesignationRouter)
app.use("/employeemaster", employeeMasterRouter)
app.use("/checklistmaster", checklistMasterRouter)
app.use("/purchase-requisition", purchaseRequisitionRouter);
app.use("/ordertype", ordertypeRouter)
app.use("/salesorderchecklist", salesOrderChecklistRouter)
app.use("/salesorder", salesOrderRouter)
app.use("/purchase-order", purchaseOrderRouter)
app.use("/suppliertype", supplierTypeRouter)
app.use("/purchase-part-master", purchasePartMasterRouter)
app.use("/supplier", supplierRouter);
app.use("/instrumentMaster", instrumentMasterRouter)
app.use("/instrumentType", instrumentTypeRouter)
app.use("/materialQualityData", materialQualityDataRouter)
app.use("/ordertype", ordertypeRouter)
app.use("/salesorderchecklist", salesOrderChecklistRouter)
app.use("/salesorder", salesOrderRouter)
app.use("/storagelocationmaster", StorageLocationMasterRouter)
app.use("/binmaster", BinMasterRouter)
app.use("/mrptype", mrpTypeRouter)
app.use("/mrpcategory", mrpCategoryRouter)
app.use("/materialplanningdata", materialPlanningDataRouter)
app.use("/inspectionLot", inspectionLotRouter)
app.use("/deliverytype", deliveryTypeRouter)
app.use("/ldclausemaster", ldClauseRouter)
app.use("/salesorderdocumentation", SalesOrderDocumentationRouter)
app.use("/purchaseExcelReport", excelReportRouter)
app.use("/resignation", resignationRouter)
app.use("/salesdocumentationdetail", salesDocumentationDetailRouter)
app.use("/salesdocumentationheader", salesDocumentationHeaderRouter)
app.use("/salesorderdetail", salesOrderDetailRouter)
app.use("/reimbursement", reimbursementRoute)
app.use("/salesexcelreport", salesExcelReportRouter)
app.use("/workstation", workStationRouter)
app.use("/productionoperators", productionOperatorRouter)
app.use("/productionorderheader", productionOrderHeaderRouter)
app.use("/productionorderrouting", productionOrderRoutingRouter)
app.get("/", (req: Request, res: Response) => {
  const message = "Welcome to the Wood field-Gayatri Application API!";
  res.send(message);
});
const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to Start Server", error);
  }
};

startServer();
