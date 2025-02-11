export default function Sidebar() {
 return (
  //sidebar container
   <aside className="w-64 h-screen bg-gray-100 p-5 border-r">
    {/* title */}
     <h1 className="text-lg font-semibold mb-4">Chat History</h1>
     {/* New chat list */}
     <ul className="space-y-2">
      <li className="p-3 bg-white rounded-md hover:bg-gray-200 cursor-pointer">New Chat</li>
     </ul>
   </aside>
 );
}