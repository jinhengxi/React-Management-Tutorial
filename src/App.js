import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@mui/material';



const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '별이',
  'birthday' : '001010',
  'gender' : '여자',
  'job' : '불가사리'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '징징이',
  'birthday' : '001111',
  'gender' : '남자',
  'job' : '오징어'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '스펀지밥',
  'birthday' : '001212',
  'gender' : '남자',
  'job' : '스펀지'
}

]


function App() {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((a)=>{return(<Customer key={a.id} id={a.id} image={a.image} name={a.name} birthday={a.birthday} gender={a.gender} job={a.job}/>)})}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}

export default App;
