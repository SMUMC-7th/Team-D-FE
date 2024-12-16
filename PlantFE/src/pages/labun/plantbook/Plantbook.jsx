import { useQuery } from "@tanstack/react-query";
import BookCard from "../../../components/BookCard/BookCard";
import { GetPlantBook } from "../../../api/labunAPI";

const PlantBookPage = () => {
  const {
    data: plants,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => GetPlantBook(),
  });
  if (isPending) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>에러!!</h1>;
  }

  return (
    <div>
      <p>
        <span>나재호</span>님의 도감
      </p>

      {plants?.map((plant) => {
        return <BookCard key={plant.id} {...plant} />;
      })}
    </div>
  );
};

export default PlantBookPage;
