import useFetch from "../../hooks/useFetch";

const DuesService = async () => {

  const { data } = useFetch('/units');

  return {
    data
  }
}

export default DuesService