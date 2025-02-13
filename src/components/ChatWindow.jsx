export default function ChatWindow() {
 return (
   <div className="flex flex-col flex-1 p-5">
     <div className="flex-1 overflowy-y-auto space-y-2">
       <p className="text-gray-800">User:</p>
       <p className="text-gray-800">AI</p>
     </div>

     <div className="flex gap-2 mt-4">
       <input type="text" placeholder="Message ChatGPT..." className="flex-1 p-2 border-2 rounded" />
       <button className="bg-black text-white px-4 py-2 rounded-3xl">Send</button>
     </div>
   </div>
 );
}