import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, ruRU } from '@mui/x-data-grid';
import { Box } from "@mui/material";
const columns = [
  { field: 'artist', 
    headerName: 'Исполнитель', 
    width: 190 },
  {
    field: 'genre',
    headerName: 'Жанр',
    width: 150,
    editable: true,
  },
  {
    field: 'song',
    headerName: 'Песня',
    width: 150,
    editable: true,
  },
  {
    field: 'year',
    headerName: 'Год',
    type: 'number',
    width: 110,
    editable: true,
  },
];

function App() {
  const [playlist, setPlayList] = useState([])

  useEffect(() => {
    const loadData = async () => {
      try {
        const playListData = await axios.get(`http://localhost:8800/api/get`)
        setPlayList(playListData.data)
      } catch(error) {
        console.log(error)
      }
    }

    loadData()
  }, []);

   console.log(playlist)
   return (
    <Box sx={{   display: "flex", justifyContent: "center" }}>
      <Box sx={{height: 375, width: '50%'}}>
      <DataGrid
        rows={playlist}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      </Box>
    </Box>
  );
}

export default App;
