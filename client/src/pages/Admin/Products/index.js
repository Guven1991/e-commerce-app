import { Text } from "@chakra-ui/react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchProductList, deleteProduct } from "../../../api";
import { Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";

function AdminProducts() {
  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchProductList
  );
  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => querysClint.invalidateQueries("admin:products"),
  });
  const querysClint = useQueryClient();

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <Link to={`/admin/products/${record._id}`}>Edit</Link>
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => {
              deleteMutation.mutate(record._id, {
                onSuccess: () => {
                  console.log("Success");
                },
              });
            }}
            onCancel={() => console.log("iptal edildi")}
            okText="Yes"
            canseltext="No"
            placement="left"
          >
            <a style={{ marginLeft: 10 }} href="/#">
              Delete
            </a>
          </Popconfirm>
        </>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error {error.message}</div>;
  }
  return (
    <div>
      <Text fontSize="2xl" p="5">
        Products
      </Text>

      <Table dataSource={data} columns={columns} rowKey="_id"></Table>
    </div>
  );
}

export default AdminProducts;
