import { useGetUsersQuery } from "./usersApiSlice"

const UserList = () => {

     const {
      data=user,
      isLoading,
      isSuccess,
      isError,
      error
     } = useGetUsersQuery()

     let content

     if (isLoading) content = <p>Loading...</p>
 
     if (isError) {
         content = <p className="errmsg">{error?.data?.message}</p>
     }
     
     if (isSuccess) {

      const { ids } = users

      const tableContent = ids?.length
          ? ids.map(userId => <User key={userId} userId={userId} />)
          : null

      content = (
          <table className="table table--users">
              <thead className="table__thead">
                  <tr>
                      <th scope="col" className="table__th user__username">Username</th>
                      <th scope="col" className="table__th user__roles">Roles</th>
                      <th scope="col" className="table__th user__edit">Edit</th>
                  </tr>
              </thead>
              <tbody>
                  {tableContent}
              </tbody>
          </table>
      )
  } 
  return (
    <h1>UserList</h1>
  )
}

export default UserList