import { useQuery } from "@tanstack/react-query";
import BookCard from "../../../components/BookCard/BookCard";
import { GetPlantBook } from "../../../api/labunAPI";
import { useAuthContext } from "../../../context/AuthContext";
import PlantDATA from "../../../mock/plants";

const PlantBookPage = () => {
  const { userName } = useAuthContext();
  // const {
  //   data: plants,
  //   isPending,
  //   isError,
  // } = useQuery({
  //   queryFn: () => GetPlantBook(),
  // });
  // if (isPending) {
  //   return <h1>로딩중</h1>;
  // }
  // if (isError) {
  //   return <h1>에러!!</h1>;
  // }

  return (
    <div>
      <p>
        <span>{userName}</span>님의 도감
      </p>

      {PlantDATA?.map((plant) => {
        return <BookCard key={plant.id} {...plant} />;
      })}
    </div>
  );
};

export default PlantBookPage;
