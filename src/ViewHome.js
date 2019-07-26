import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import dayjs from "dayjs";
import "./App.css";

const ViewHome = () => {
  return (
    <Layout>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra
        urna vitae arcu vestibulum, at facilisis nunc tempus. Proin dignissim
        semper dui in lacinia. Vivamus finibus id leo vel vehicula. Maecenas sit
        amet orci malesuada, euismod sapien vitae, tincidunt tortor. Suspendisse
        vitae ultricies arcu. Phasellus consequat augue sed neque molestie, ut
        lobortis ligula imperdiet. Sed a leo eu ex egestas luctus. Sed vitae
        rhoncus nulla. Morbi ullamcorper nulla vel ante euismod, vel ultrices
        ante tincidunt.
      </p>
      <div>
        <button>
          <Link
            className="link-card"
            to={`calendar/${dayjs().year()}/${dayjs().month()}/${dayjs().date()}`}
          >
            Start writing!
          </Link>
        </button>
        <button>
          <Link className="link-card" to={`calendar/${dayjs().year()}`}>
            Calendar
          </Link>
        </button>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra
          urna vitae arcu vestibulum, at facilisis nunc tempus. Proin dignissim
          semper dui in lacinia. Vivamus finibus id leo vel vehicula. Maecenas
          sit amet orci malesuada, euismod sapien vitae, tincidunt tortor.
          Suspendisse vitae ultricies arcu. Phasellus consequat augue sed neque
          molestie, ut lobortis ligula imperdiet. Sed a leo eu ex egestas
          luctus. Sed vitae rhoncus nulla. Morbi ullamcorper nulla vel ante
          euismod, vel ultrices ante tincidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra
          urna vitae arcu vestibulum, at facilisis nunc tempus. Proin dignissim
          semper dui in lacinia. Vivamus finibus id leo vel vehicula. Maecenas
          sit amet orci malesuada, euismod sapien vitae, tincidunt tortor.
          Suspendisse vitae ultricies arcu. Phasellus consequat augue sed neque
          molestie, ut lobortis ligula imperdiet. Sed a leo eu ex egestas
          luctus. Sed vitae rhoncus nulla. Morbi ullamcorper nulla vel ante
          euismod, vel ultrices ante tincidunt.
        </p>
      </div>
    </Layout>
  );
};

export default ViewHome;
