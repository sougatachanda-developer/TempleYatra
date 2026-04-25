'use client';
import { useParams } from "next/navigation";

export default function TempleDetails() {
  
  const params = useParams();
  const id = params.id;

  return (
    <div>
        <h1 className="text-black font-bold">Temple Details for ID: {id}</h1>
    </div>
  )
}
