import './myAccount.scss';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

export default function MyAccount(): JSX.Element {
  // const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  // const [user, setUser] = useState<IUser>(Object);
  // const { username } = useParams();
  //
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/api/users?username=${username}`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [username]);

  return (
    <>
      <Header />
      <div className="my-account">
        <Sidebar />
        <div className="myAccountBlock">
          <div className="profileBlockTop">
            My account
          </div>
        </div>
      </div>
    </>
  );
}
