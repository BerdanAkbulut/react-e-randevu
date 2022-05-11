import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { data, istanbulIlce, edirneIlce } from '../data/data';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const RandevuListe = () => {
  const navigate = useNavigate();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const [randevular, setRandevular] = useState([]);
  
  useEffect(() => {
    Cookies.get('randevular')
      ? setRandevular(JSON.parse(Cookies.get('randevular')))
      : Cookies.set('randevular', JSON.stringify(data));
  }, []);

  return (
    <div>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Hasta Adi Soyadı</StyledTableCell>
              <StyledTableCell>Telefon Numarası</StyledTableCell>
              <StyledTableCell>Tc No</StyledTableCell>
              <StyledTableCell>İlçe / İl</StyledTableCell>
              <StyledTableCell>Hastane Adı</StyledTableCell>
              <StyledTableCell>Bölüm</StyledTableCell>
              <StyledTableCell>Doktor Adı</StyledTableCell>

              <StyledTableCell>Randevu Saati</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {randevular.map((row, key) => (
              <StyledTableRow
                className="cursor-pointer"
                onClick={() => {
                  navigate(`/${row.id}`);
                }}
                key={key}
              >
                <StyledTableCell component="th" scope="row">
                  {row.hastaAdi + ' ' + row.hastaSoyadi}
                </StyledTableCell>
                <StyledTableCell>{row.telefon}</StyledTableCell>
                <StyledTableCell>{row.tcNo}</StyledTableCell>
                <StyledTableCell>{row.ilce + '/' + row.il}</StyledTableCell>
                <StyledTableCell>{row.hastaneAdi}</StyledTableCell>
                <StyledTableCell>{row.bolum}</StyledTableCell>
                <StyledTableCell>{row.doktorAdi}</StyledTableCell>
                <StyledTableCell>{row.randevuSaati}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RandevuListe;
