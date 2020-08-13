import { useQuery, useMutation } from "react-query";
import * as api from "./Pokemon";
import * as captureAPI from "./Capture";
// import * as positionApi from 'src/api/positions'

export const usePokemon = (page, nameString, descriptionString) => {
  let { data, status, error, refetch, isFetching } = useQuery(
    ["getPokemon", page, nameString, descriptionString],
    async (_key, page, nameString, descriptionString) => {
      let data = await api.GetPokemon(page, nameString, descriptionString);

      if (!data.data) throw data;
      return data;
    },
    { cacheTime: 0, refetchOnWindowFocus: false }
  );

  return {
    data,
    status,
    error,
    refetch,
    isFetching,
  };
};

export const usePokemonByType = (searchString, page) => {
  let { data, status, error, refetch, isFetching } = useQuery(
    ["getPokemonByType", searchString, page],
    async (_key, searchString, page) => {
      let data = await api.GetPokemonByType(searchString, page);

      if (!data.data) throw data;
      return data;
    },
    { cacheTime: 0, refetchOnWindowFocus: false }
  );

  return {
    data,
    status,
    error,
    refetch,
    isFetching,
  };
};
export const usePokemonByAbility = (searchString, page) => {
  let { data, status, error, refetch, isFetching } = useQuery(
    ["getPokemonByAbility", searchString, page],
    async (_key, searchString, page) => {
      let data = await api.GetPokemonByAbility(searchString, page);

      if (!data.data) throw data;
      return data;
    },
    { cacheTime: 0, refetchOnWindowFocus: false }
  );

  return {
    data,
    status,
    error,
    refetch,
    isFetching,
  };
};
export const usePokemonByEggGroup = (searchString, page) => {
  let { data, status, error, refetch, isFetching } = useQuery(
    ["getPokemonByEggGroup", searchString, page],
    async (_key, searchString, page) => {
      let data = await api.GetPokemonByEggGroup(searchString, page);

      if (!data.data) throw data;
      return data;
    },
    { cacheTime: 0, refetchOnWindowFocus: false }
  );

  return {
    data,
    status,
    error,
    refetch,
    isFetching,
  };
};
export const useCaptured = () => {
  let { data, status, error, refetch, isFetching } = useQuery(
    ["getCaptured"],
    async (_key) => {
      let data = await captureAPI.GetCaptured();

      if (!data.data) throw data;
      return data;
    },
    { cacheTime: 0, refetchOnWindowFocus: false }
  );

  return {
    data,
    status,
    error,
    refetch,
    isFetching,
  };
};
export const useGetSinglePokemon = (id) => {
  let { data, status, error, refetch, isFetching } = useQuery(
    ["GetSinglePokemon", id],
    async (_key, id) => {
      let data = await api.GetSinglePokemon(id);

      if (!data.data) throw data;
      return data;
    },
    { cacheTime: 0, refetchOnWindowFocus: false }
  );

  return {
    data,
    status,
    error,
    refetch,
    isFetching,
  };
};
