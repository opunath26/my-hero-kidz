import React from 'react';

const SingleProductLoading = () => {
    return (
        <div className="mx-auto my-12 px-4 max-w-7xl animate-pulse">
            <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
                <div className="bg-slate-200 rounded-2xl w-full aspect-square"></div>
                <div className="space-y-5 py-2">
                    <div className="bg-slate-200 rounded-md w-3/4 h-8"></div>
                    <div className="bg-slate-200 rounded-md w-1/4 h-6"></div>
                    <div className="space-y-2 pt-4">
                        <div className="bg-slate-200 rounded-md w-full h-4"></div>
                        <div className="bg-slate-200 rounded-md w-full h-4"></div>
                        <div className="bg-slate-200 rounded-md w-2/3 h-4"></div>
                    </div>
                    <div className="bg-slate-200 mt-6 rounded-xl w-full h-12"></div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductLoading;