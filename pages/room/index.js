import { v4 } from "uuid";

const RoomIndex = () => {
  return <div>&nbsp;</div>;
};

RoomIndex.getSeverSideProps = ({ res }) => {
  if (res) {
    res.writeHead(301, {
      Location: "/room/" + v4(),
    });
    res.end();
  }
};

export default RoomIndex;
