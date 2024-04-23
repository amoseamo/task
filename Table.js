const Table=(props)=>{
    const {user}=props
    
    const store=user.map((e,index)=>{
      console.log(e.name);

      return(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{e.name}</td>
          <td>{e.age}</td>
          <td>{e.department}</td>
        </tr>
      )
     
    })
    console.log(store);
        return(
          <div>
            <table>
              <thead>
                <th>Id</th>
                <th>name</th>
                <th>age</th>
                <th>department</th>
              </thead>
              <tbody>
                {store}
              </tbody>
            </table>
          </div>
        )
}

export default Table;