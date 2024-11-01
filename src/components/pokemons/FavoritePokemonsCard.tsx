import type { FavoritePokemon } from "@/interfaces/favorite-pokemos";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonsCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") ?? "[]",
    ) as FavoritePokemon[];

    const newFavorites = favorites.filter(
      (favorite) => favorite.id !== pokemon.id,
    );

    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center text-center">
        <a
          href={`/pokemons/${pokemon.name}`}
          class="flex flex-col text-center text-slate-300 text-xl"
        >
          <img
            src={imgSrc}
            alt={pokemon.name}
            height={96}
            width={96}
            style={`view-transition-name: ${pokemon.name}-image`}
          />
          <p class="capitalize">
            #{pokemon.id} - {pokemon.name}
          </p>
        </a>
        <button onClick={deleteFavorite} class="text-red-500">
          Delete
        </button>
      </div>
    </Show>
  );
};
