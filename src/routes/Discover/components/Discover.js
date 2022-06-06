import React, { Component, useState } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { useGetData } from "../../../helpers/useGetData";
import { useGetCategories } from "../../../helpers/useGetCategories";
import { useGetPlaylist } from "../../../helpers/useGetPlaylist";

export default function Discover() {
  let newReleases = useGetData();
  let categories = useGetCategories();
  let playlist = useGetPlaylist();
  return (
    <div className="discover">
      {newReleases !== null && (
        <DiscoverBlock
          text="NUEVO ESTA SEMANA"
          id="released"
          data={newReleases}
        />
      )}
      {playlist !== null && (
        <DiscoverBlock text="PLAYLISTS" id="featured" data={playlist} />
      )}
      {categories !== null && (
        <DiscoverBlock
          text="ENCUENTRA"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      )}
    </div>
  );
}
