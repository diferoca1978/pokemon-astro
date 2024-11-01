import type { FavoritePokemon } from "@/interfaces/favorite-pokemos";
import { createSignal, For } from "solid-js";
import { FavoritePokemonsCard } from "./FavoritePokemonsCard";

const getLocalStoragePokemos = (): FavoritePokemon[] => {
  const favoritePokemos = JSON.parse(localStorage.getItem("favorites") ?? "[]");

  return favoritePokemos;
};

export const FavoritePokemos = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemos());

  return (
    <>
      <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-3 ">
        <For each={pokemons()}>
          {(pokemon) => <FavoritePokemonsCard pokemon={pokemon} />}
        </For>
      </div>
    </>
  );
};
