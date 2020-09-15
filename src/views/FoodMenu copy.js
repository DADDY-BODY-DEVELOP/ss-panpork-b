import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import { Table } from "react-bootstrap";

import usersData from "../pages/users/UsersData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["name", "registered", "role", "status"];
const fieldsto = ["ID", "name", "registered", "role", "status"];

const FoodMenu = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>Striped Table</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                striped
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>Striped Table</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fieldsto}
                striped
                itemsPerPage={10}
                pagination
                // scopedSlots={{
                //   status: (item, i) => (
                //     <td>
                //       <CBadge color={getBadge(item.status)}>
                //         {item.status}
                //       </CBadge>
                //     </td>
                //   ),
                // }}
                // scopedSlots={{
                //   ID: (item, i) => <td>{i+1}</td>,
                // }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>Striped Table</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fieldsto}
                striped
                itemsPerPage={10}
                pagination
                // scopedSlots={{
                //   status: (item, i) => (
                //     <td>
                //       <CBadge color={getBadge(item.status)}>
                //         {item.status}
                //       </CBadge>
                //     </td>
                //   ),
                // }}
                // scopedSlots={{
                //   ID: (item, i) => <td>{i+1}</td>,
                // }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default FoodMenu;
