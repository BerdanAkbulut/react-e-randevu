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
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from 'react-toastify';
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

  const randevuDelete = (e) => {
    try {
      const deletedRandevular = randevular.filter(
        (randevu) => randevu.id !== parseInt(e)
      );
      Cookies.set('randevular', JSON.stringify(deletedRandevular));
      toast.error('Randevu silindi.');
      setTimeout(() => window.location.reload(), 3000);
    } catch (e) {
      toast.info('Randevu silinirken bir hata oluştu.');
      console.log(e);
    }
  };

  useEffect(() => {
    Cookies.get('randevular')
      ? setRandevular(JSON.parse(Cookies.get('randevular')))
      : Cookies.set('randevular', JSON.stringify(data));
  }, [randevular.length]);

  return (
    <div>
      <Header />
      <ToastContainer />
      {randevular ? (
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
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {randevular.map((row, key) => (
                <StyledTableRow className="" key={key}>
                  <div
                    className="cursor-pointer transition-all ease-in-out hover:scale-105"
                    onClick={() => {
                      navigate(`/${row.id}`);
                    }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.hastaAdi + ' ' + row.hastaSoyadi}
                    </StyledTableCell>
                  </div>

                  <StyledTableCell>{row.telefon}</StyledTableCell>
                  <StyledTableCell>{row.tcNo}</StyledTableCell>
                  <StyledTableCell>{row.ilce + '/' + row.il}</StyledTableCell>
                  <StyledTableCell>{row.hastaneAdi}</StyledTableCell>
                  <StyledTableCell>{row.bolum}</StyledTableCell>
                  <StyledTableCell>{row.doktorAdi}</StyledTableCell>
                  <StyledTableCell>{row.randevuSaati}</StyledTableCell>
                  <StyledTableCell onClick={(e) => randevuDelete(row.id)}>
                    <DeleteIcon
                      className="hover:scale-110 cursor-pointer"
                      fontSize="large"
                      color="error"
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default RandevuListe;
