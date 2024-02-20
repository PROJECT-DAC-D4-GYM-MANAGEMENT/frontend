import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from "./admindetail.module.css"

import axios from 'axios';
import { config } from '../../config/config';

function createData(name, specialization,salary,experience) {
  return {
    name,
    specialization,
    salary,
    experience,
    Trainee: [
      {
        traineename: 'abcd',
        plan: '11091700',
        slot: 3,
        start:"2020-01-05",
        end:"2020-01-05"
      },
      {
        traineename: 'abcd',
        plan: '11091700',
        slot: 3,
        start:"2020-01-05",
        end:"2020-01-05"
      },
    ],
  };
}



Row.propTypes = {
    row: PropTypes.shape({
        salary: PropTypes.number.isRequired,
        experience: PropTypes.number.isRequired,

        Trainee: PropTypes.arrayOf(
        PropTypes.shape({
           
            slot: PropTypes.string.isRequired,
          plan: PropTypes.string.isRequired,
          traineename: PropTypes.string.isRequired,
          start: PropTypes.string.isRequired,
          end: PropTypes.string.isRequired,
        }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      specialization: PropTypes.number.isRequired,
     
    }).isRequired,
  };

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        
     
        <TableCell align="right">{row.specialization}</TableCell>
        <TableCell align="right">{row.salary}</TableCell>
        <TableCell align="right">{row.experience}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Trainee Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Trainee-Name</TableCell>
                    <TableCell>Plan</TableCell>
                    <TableCell align="right">Slot</TableCell>
                    <TableCell align="right">Start-Date</TableCell>
                    <TableCell align="right">End-Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Trainee.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.traineename}
                      </TableCell>
                      <TableCell>{historyRow.plan}</TableCell>
                      <TableCell align="right">{historyRow.slot}</TableCell>
                      <TableCell align="right">
                        {historyRow.start}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.end}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



// const rows = [
//   createData('pqru', "pqrs", 6, 24),
//   createData('pqru', "pqrs", 6, 24),
//   createData('pqru', "pqrs", 6, 24),
//   createData('pqru', "pqrs", 6, 24),
//   createData('pqru', "pqrs", 6, 24),
//   createData('pqru', "pqrs", 6, 24),
// ];

export default function CollapsibleTable() {
const [rows,setRow]=React.useState([]);
  React.useEffect(()=>{
    const { jwt } = JSON.parse(sessionStorage.getItem("user"));
     axios.get(`${config.base}membership`, {
      headers: { Authorization: `Bearer ${jwt}` },
    }).then((res)=>{
      
     const{data}=res;
      const map = {};
      data.forEach((a) => {
        if (map[a.trainer.id]) {
          const b = {
            traineename: a?.trainee?.user?.first,
            plan: a.plan.name,
            slot: `${a.slot.start} - ${a.slot.end}`,
            start: a.start,
            end: a.end,
          };
          map[a.trainer.id].Trainee.push(b);
        } else {
          map[a.trainer.id] = {
            name: a?.trainer?.user?.first,
            specialization: a?.trainer?.specialization,
            salary: a?.trainer?.salary,
            experience: a?.trainer?.experience,
            Trainee: [
              {
                traineename: a?.trainee?.user?.first,
                plan: a.plan.name,
                slot:`${a.slot.start} - ${a.slot.end}`,
                start: a.start,
                end: a.end,
              },
            ],
          };
        }
      });


      let arr=[];
      for(let a in map){
        arr.push(map[a])
      }
      setRow([...arr])


    }).catch((err)=>{
      
    })
  })
  
  return (
    <div className={styles.details}>
        <div className={styles.head}>
            Trainer  Details
        </div>
     <div className={styles.table}>
     <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Trainer-Name</TableCell>
            <TableCell align="right">Specialisation</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Experience</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </div>
    </div>
    
  );
}