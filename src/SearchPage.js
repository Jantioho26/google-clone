import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./pages/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    {data?.organic_results && (
  <div className="searchPage__results">

    <p className="searchPage__resultCount">
      About {data?.search_information?.total_results?.toLocaleString()} results
      {data?.search_metadata?.total_time_taken &&
        ` (${data.search_metadata.total_time_taken} seconds)`
      }
    </p>

    {data.organic_results.map((item) => (
  <div
    className="searchPage__result"
    key={item.position}
  >
    <div className="searchPage__resultHeader">

      <img
        className="searchPage__resultFavicon"
        src={`https://www.google.com/s2/favicons?domain=${new URL(item.link).hostname}&sz=32`}
        alt=""
      />

      <div className="searchPage__resultSiteInfo">
        <span className="searchPage__resultSiteName">
          {item.source || new URL(item.link).hostname.replace("www.", "")}
        </span>

        <span className="searchPage__resultUrl">
          {item.displayed_link || item.link}
        </span>
      </div>

      <MoreVertIcon className="searchPage__resultMenu" />

    </div>

    <a
      className="searchPage__resultTitle"
      href={item.link}
      target="_blank"
      rel="noreferrer"
    >
      <h2>{item.title}</h2>
    </a>

    <p className="searchPage__resultSnippet">
      {item.snippet}
    </p>
  </div>
))}

  </div>
)}

    </div>
  );
}

export default SearchPage;
