import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../static/default.svg";
import * as db from "../firestore";
import Empty from "./shared/Empty";
import Error from "./shared/Error";
import Loading from "./shared/Loading";
import useSWR from 'swr' // Stale While Revalidate

function UserLists({ user }) {
  const { data: lists, error } = useSWR(user.uid, db.getUserLists)
  
  if (error) return <Error message={error.message}/>
  if (!lists) return <Loading />
  if (lists.length === 0) return <Empty />

  return (
    <>
      <section className="text-gray-500 bg-gray-900 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {lists.map(list => (
              <ListItem key={list.id} list={list} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


function ListItem({ list }) {
  const { id, name, description, image, users } = list
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4 masterList__item movie-club-item">
      {" "}
      <Link to={`/${id}`}>
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={image || defaultImage}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800">

            <h1 className="title-font text-lg font-medium text-white mb-3 bg-gray-900 p-2">
              {name}
            </h1>
            <ul className="list-none ">
              <li className="tracking-widest text-sm title-font font-medium text-white-500 mb-1">
                {users[0].name} {users.length > 1 && `+ ${users.length - 1} others`}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default UserLists;
