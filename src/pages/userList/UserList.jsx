import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import "./userList.css";
import { userRows } from "../../sampleData";
import { Link } from "react-router-dom";

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 240 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "transaction", headerName: "Transaction", width: 180 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: "John Snow",
      avatar: "",
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$150.30",
    },
    {
      id: 2,
      username: "John Snow",
      avatar: "",
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$150.30",
    },
    {
      id: 3,
      username: "John Snow",
      avatar: "",
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$150.30",
    },
    {
      id: 4,
      username: "John Snow",
      avatar: "",
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$150.30",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
