import "./list.scss"

import Datatable from "../../components/datatable/Datatable"

const List = ({title}) => {
  return (
    <div className="list">
      <div className="listContainer">
        <Datatable title={title}/>
      </div>
    </div>
  )
}

export default List