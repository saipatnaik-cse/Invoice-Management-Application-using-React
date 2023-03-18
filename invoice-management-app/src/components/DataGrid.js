import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import './DataGrid.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import RefreshIcon from '@mui/icons-material/Refresh'
import { borderRadius } from '@mui/system';

function DataGridforHRC() {

  const handleADD = () => {
    axios.post("http://localhost:6484/HRCProjFinal/InsertServlet", { business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id })

    handleCloseforAdd()

    // console.log(business_code);
    // console.log(cust_number);
    // console.log(clear_date);
    // console.log(buisness_year);
    // console.log(doc_id);
    // console.log(posting_date);
    // console.log(document_create_date);
    // console.log(due_in_date);
    // console.log(invoice_currency);
    // console.log(document_type);
    // console.log(posting_id);
    // console.log(total_open_amount);
    // console.log(baseline_create_date);
    // console.log(cust_payment_terms);
    // console.log(invoice_id);
  }

  const [openforAdvSearch, setOpenforAdvSearch] = React.useState(false);
  const handleClickOpenforAdvSearch = () => {
    setOpenforAdvSearch(true);
  };
  const handleCloseforAdvSearch = () => {
    setOpenforAdvSearch(false);
  };


  const [openforAdd, setOpenforAdd] = React.useState(false);
  const handleClickOpenforAdd = () => {
    setOpenforAdd(true);
  };
  const handleCloseforAdd = () => {
    setOpenforAdd(false);
  };

  const [openforEdit, setOpenforEdit] = React.useState(false);
  const handleClickOpenforEdit = () => {
    setOpenforEdit(true);
  };
  const handleCloseforEdit = () => {
    setOpenforEdit(false);
  };


  const [openforDelete, setOpenforDelete] = React.useState(false);
  const handleClickOpenforDelete = () => {
    setOpenforDelete(true);
  };
  const handleCloseforDelete = () => {
    setOpenforDelete(false);
  };



  const [data, setData] = useState([]);

  const getHRCData = async () => {
    await axios.get("http://localhost:6484/HRCProjFinal/JSONServlet").then((res) => {
      setData(res.data.data);
    });
  };
  useEffect(() => {
    getHRCData();
  }, []);


  const handleDELETE = () => {
    // console.log("Hello");
    selectedRows.forEach(element => {
      sl_no = element.sl_no
      // console.log(sl_no);
      axios.post("http://localhost:6484/HRCProjFinal/DeleteServlet", { sl_no })

    });
    handleCloseforDelete()
  }


  const handleEDIT = () => {
    // console.log("Hello");
    selectedRows.forEach(element => {
      sl_no = element.sl_no
      // console.log(sl_no);
      axios.post("http://localhost:6484/HRCProjFinal/EditServlet", { sl_no, invoice_currency, cust_payment_terms })
    });
    handleCloseforEdit()
  }


  const searchCustfn = (event) => {
    console.log(cust_number);
    if (event.keyCode === 13) {
      axios.post("http://localhost:6484/HRCProjFinal/SearchCustIdServlet", { cust_number }).then((res) => {
        setData(res.data.data)
        console.log(res)
      })
    }
  }

  const advsearchCust = () => {
    console.log(doc_id,invoice_id,cust_number,buisness_year);
      axios.post("http://localhost:6484/HRCProjFinal/AdvSearchServlet", {doc_id,invoice_id,cust_number,buisness_year}).then((res) => {
        setData(res.data.data);
        console.log(res);
    })
  }

  const columns = [
    { field: "sl_no", headerName: "Slno", width: 60 },
    { field: "business_code", headerName: "Business Code", width: 110 },
    { field: "cust_number", headerName: "Customer Number", width: 140 },
    { field: "clear_date", headerName: "Clear Date", width: 100 },
    { field: "buisness_year", headerName: "Bussiness Year", width: 115 },
    { field: "doc_id", headerName: "Document Id", width: 110 },
    { field: "posting_date", headerName: "Posting Date", width: 120 },
    { field: "document_create_date", headerName: "Document Create Date", width: 190 },
    { field: "document_create_date1", headerName: "Document Create Date1", width: 190 },
    { field: "due_in_date", headerName: "Due Date", width: 100 },
    { field: "invoice_currency", headerName: "Invoice Currency", width: 120 },
    { field: "document_type", headerName: "Document Type", width: 110 },
    { field: "posting_id", headerName: "Posting Id", width: 90 },
    { field: "area_business", headerName: "Area Business", width: 120 },
    { field: "total_open_amount", headerName: "Total Open Amount", width: 150 },
    { field: "baseline_create_date", headerName: "Baseline Create Date", width: 160 },
    { field: "cust_payment_terms", headerName: "Cust Payment Terms", width: 150 },
    { field: "invoice_id", headerName: "Invoice Id", width: 100 },
    { field: "isOpen", headerName: "IsOpen", width: 60 },
    { field: "is_deleted", headerName: "Is Deleted", width: 90 },
  ];


  const rows = data.map((row) => ({
    sl_no: row.sl_no,
    business_code: row.business_code,
    cust_number: row.cust_number,
    clear_date: row.clear_date,
    buisness_year: row.buisness_year,
    doc_id: row.doc_id,
    posting_date: row.posting_date,
    document_create_date: row.document_create_date,
    document_create_date1: row.document_create_date1,
    due_in_date: row.due_in_date,
    invoice_currency: row.invoice_currency,
    document_type: row.document_type,
    posting_id: row.posting_id,
    area_business: row.area_business,
    total_open_amount: row.total_open_amount,
    baseline_create_date: row.baseline_create_date,
    cust_payment_terms: row.cust_payment_terms,
    invoice_id: row.invoice_id,
    isOpen: row.isOpen,
    is_deleted: row.is_deleted,
  }))

  // console.log(data);

  var [sl_no, setsl_no] = useState("");
  var [business_code, setbusiness_code] = useState("");
  var [cust_number, setcust_number] = useState("");
  var [clear_date, setclear_date] = useState("");
  var [buisness_year, setbuisness_year] = useState("");
  var [doc_id, setdoc_id] = useState("");
  var [posting_date, setposting_date] = useState("");
  var [document_create_date, setdocument_create_date] = useState("");
  var [document_create_date1, setdocument_create_date1] = useState("");
  var [due_in_date, setdue_in_date] = useState("");
  var [invoice_currency, setinvoice_currency] = useState("");
  var [document_type, setdocument_type] = useState("");
  var [posting_id, setposting_id] = useState("");
  var [area_business, setarea_business] = useState("");
  var [total_open_amount, settotal_open_amount] = useState("");
  var [baseline_create_date, setbaseline_create_date] = useState("");
  var [cust_payment_terms, setcust_payment_terms] = useState("");
  var [invoice_id, setinvoice_id] = useState("");
  var [isOpen, setisOpen] = useState("");
  var [is_deleted, setis_deleted] = useState("");

  const [selectedRows, setSelectedRows] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(10);


  return <div>
    <div className='buttons'>
      <div className='buttons1'>
        <Button variant="contained" className="buttonind">PREDICT</Button>
        <Button variant="outlined" className="buttonind">ANALYTICS VIEW</Button>

        <Button variant="outlined" onClick={handleClickOpenforAdvSearch} className="buttonind">ADVANCE SEARCH</Button>
        <Dialog open={openforAdvSearch} onClose={handleCloseforAdvSearch}  style={{ color: 'white' }}>
          <DialogTitle style={{ backgroundColor: '#283D4A', color: 'white' }}>Advance Search</DialogTitle>
          <DialogActions style={{ backgroundColor: '#283D4A', color: 'white' }}>
            <div>

              <div className='fieldsarr'>
                <TextField style={{backgroundColor: 'white'}} id="outlined-basic" label="Document id" variant="outlined" onChange={(e) => setdoc_id(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField style={{backgroundColor: 'white'}} id="outlined-basic" label="Invoice Id" variant="outlined" type="number" onChange={(e) => setinvoice_id(e.target.value)} />
              </div>
              &nbsp;&nbsp;&nbsp;

              <div>
                <TextField style={{backgroundColor: 'white'}} id="outlined-basic" label="Customer Number" variant="outlined" type="number" onChange={(e) => setcust_number(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField style={{backgroundColor: 'white'}} id="outlined-basic" label="Business Year" variant="outlined" type="year" onChange={(e) => setbuisness_year(e.target.value)} />
              </div>
              &nbsp;&nbsp;&nbsp;

              <div className='fieldsarr' style={{ backgroundColor: '#283D4A', color: 'white' }}>
                <Button onClick={advsearchCust} variant='outlined' className='dialogbuttons'>SEARCH</Button>

                <Button onClick={handleCloseforAdvSearch} variant='outlined' className='dialogbuttons'>CANCEL</Button>
              </div>
            </div>
          </DialogActions>
        </Dialog>

      </div>

      <div>
        <RefreshIcon onClick={getHRCData} varient='outlined' className='refreshicon' />
      </div>
      <div className='buttons2'>
        <TextField id="outlined-basic" className='customerinputcss' label="Search Customer Id" variant="filled" onChange={(e) => setcust_number(e.target.value)} onKeyDown={(e) => searchCustfn(e)} />
      </div>

      <div className='buttons3'>
        <Button variant="outlined" className="buttonind" onClick={handleClickOpenforAdd}>ADD</Button>
        <Dialog open={openforAdd} onClose={handleCloseforAdd} maxWidth="xl">
          <DialogTitle style={{ backgroundColor: '#283D4A', color: 'white' }}>Add</DialogTitle>
          <DialogActions style={{ backgroundColor: '#283D4A', color: 'white' }}>
            <div className='addgrid'>
              <div className='additems'>
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Business Code" variant="filled" onChange={(e) => setbusiness_code(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Customer Number" variant="filled" type="number" onChange={(e) => setcust_number(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Clear Date" variant="filled" type="date" defaultValue="2017-05-24" onChange={(e) => setclear_date(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Business Year" variant="filled" type="year" onChange={(e) => setbuisness_year(e.target.value)} />
              </div>

              <div className='additems'>
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Document id" variant="filled" onChange={(e) => setdoc_id(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Posting Date" variant="filled" type="date" defaultValue="2017-05-24" onChange={(e) => setposting_date(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Document Create Date" variant="filled" type="date" defaultValue="2017-05-24" onChange={(e) => setdocument_create_date(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Due Date" variant="filled" type="date" defaultValue="2017-05-24" onChange={(e) => setdue_in_date(e.target.value)} />
              </div>

              <div className='additems'>
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Invoice Currency" variant="filled" onChange={(e) => setinvoice_currency(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Document type" variant="filled" onChange={(e) => setdocument_type(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Posting Id" variant="filled" type="number" onChange={(e) => setposting_id(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Total open amount" variant="filled" type="number" onChange={(e) => settotal_open_amount(e.target.value)} />
              </div>

              <div style={{ color: 'white'}} className='additems'>
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Baseline Create Date" variant="filled" type="date" defaultValue="2017-05-24" onChange={(e) => setbaseline_create_date(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Customer Payment Terms" variant="filled" onChange={(e) => setcust_payment_terms(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField className='editin' style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Invoice Id" variant="filled" type="number" onChange={(e) => setinvoice_id(e.target.value)} />
              </div>

              <div className='additems' style={{ backgroundColor: '#283D4A', color: 'white'}}>
                <Button onClick={handleADD} className='addbuttons' variant='outlined'>ADD</Button>
                &nbsp;&nbsp;&nbsp;
                <Button onClick={handleCloseforAdd} className='addbuttons' variant='outlined'>CANCEL</Button>
              </div>

            </div>
          </DialogActions>
        </Dialog>



        <Button variant="outlined" className="buttonind" onClick={handleClickOpenforEdit}>EDIT</Button>

        <Dialog open={openforEdit} onClose={handleCloseforEdit}>
          <DialogTitle style={{ backgroundColor: '#283D4A', color: 'white' }}>Edit</DialogTitle>
          <DialogActions style={{ backgroundColor: '#283D4A' }}>
            <div>
              <div className='fieldsarr'>
                <TextField style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Invoice Currency" variant="filled" onChange={(e) => setinvoice_currency(e.target.value)} />
                &nbsp;&nbsp;&nbsp;
                <TextField style={{ color: 'white', backgroundColor: 'white' }} id="outlined-basic" label="Customer Payment Terms" variant="filled" onChange={(e) => setcust_payment_terms(e.target.value)} />
              </div>
              &nbsp;&nbsp;
              <div className='fieldsarr' style={{ padding: '10' }}>
                <Button onClick={handleEDIT} className='dialogbuttons'>EDIT</Button>
                <Button onClick={handleCloseforEdit} className='dialogbuttons'>CANCEL</Button>
              </div>
            </div>
          </DialogActions>
        </Dialog>

        <Button variant="outlined" className="buttonind" onClick={handleClickOpenforDelete}>DELETE</Button>

        <Dialog open={openforDelete} onClose={handleCloseforDelete}>
          <DialogTitle style={{ backgroundColor: '#283D4A', color: 'white' }}>Delete Records ?</DialogTitle>
          <DialogContent style={{ backgroundColor: '#283D4A' }}>
            <DialogContentText style={{ color: 'white' }}>
              Are you sure you want to delete these records[s] ?
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ backgroundColor: '#283D4A', color: 'white' }}>
            <Button onClick={handleCloseforDelete} variant='outlined' className='dialogbuttons'>CANCEL</Button>
            <Button onClick={handleDELETE} variant='outlined' className='dialogbuttons'>DELETE</Button>
          </DialogActions>
        </Dialog>

      </div>

    </div>

    <div className='DataGridStyle'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowHeight={30}
        headerHeight={50}
        getRowId={(row) => row.sl_no}
        style={{ color: 'white', border: '0' }}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(row) => {
          const selectedslno = new Set(row);
          const selectedRows = rows.filter((row) =>
            selectedslno.has(row.sl_no),
          );

          setSelectedRows(selectedRows);
          console.log(selectedRows);
          // setArrIds(ids);
          // console.log(ids);

        }}
      />
    </div>
  </div>;
}

export default DataGridforHRC;
