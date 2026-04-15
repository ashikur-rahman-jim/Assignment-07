import { Link, useLoaderData } from "react-router";

const Friends = () => {
    const friends = useLoaderData();

    return (
        <section className="w-11/12 mx-auto p-6 bg-slate-50 min-h-screen">
            <h3 className="text-2xl font-semibold text-[#1F2937] mb-8">Your Friends</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    friends.map(friend => (
                        <Link to={`FriendsDetails/${friend.id}`} key={friend.id} className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100">

                            {/* Profile Image */}
                            <div className="mb-4">
                                <img src={friend.picture} alt="" className="w-20 h-20 rounded-full object-cover ring-2 ring-slate-100" />
                            </div>

                            {/* Name & Time */}
                            <h4 className="text-xl font-semibold text-[#1F2937]">{friend.name}</h4>
                            <p className="text-xs text-[#64748B] mb-3 font-medium">{`${friend.days_since_contact}d ago`}</p>

                            {/* Tags Section */}
                            <p className="px-3 py-1 mb-2 text-[10px] font-bold bg-[#CBFADB] text-[#244D3F] rounded-full">{friend.tags[0]}</p>

                            {/* Status Badge */}
                            <p className={`px-4 py-1.5 rounded-full text-xs text-white bg-[#EF4444] shadow-sm`}>{friend.status}</p>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
};

export default Friends;