import React from "react";

function Search() {
  return (
    <>
      <div>
        <div className="py-2 mr-2">
          <div className="max-w-[548px] w-full mx-auto">
            <div className="relative px-1">
              <svg
                className="absolute z-20 cursor-pointer top-[18px] left-4"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2716 13.1684L11.3313 10.2281C12.0391 9.28574 12.4213 8.13865 12.42 6.96C12.42 3.94938 9.97063 1.5 6.96 1.5C3.94938 1.5 1.5 3.94938 1.5 6.96C1.5 9.97063 3.94938 12.42 6.96 12.42C8.13865 12.4213 9.28574 12.0391 10.2281 11.3313L13.1684 14.2716C13.3173 14.4046 13.5114 14.4756 13.711 14.47C13.9105 14.4645 14.1004 14.3827 14.2415 14.2415C14.3827 14.1004 14.4645 13.9105 14.47 13.711C14.4756 13.5114 14.4046 13.3173 14.2716 13.1684ZM3.06 6.96C3.06 6.18865 3.28873 5.43463 3.71727 4.79328C4.14581 4.15192 4.7549 3.65205 5.46754 3.35687C6.18017 3.06169 6.96433 2.98446 7.72085 3.13494C8.47738 3.28542 9.17229 3.65686 9.71772 4.20228C10.2631 4.74771 10.6346 5.44262 10.7851 6.19915C10.9355 6.95567 10.8583 7.73983 10.5631 8.45247C10.268 9.1651 9.76808 9.77419 9.12673 10.2027C8.48537 10.6313 7.73135 10.86 6.96 10.86C5.92604 10.8588 4.93478 10.4475 4.20365 9.71635C3.47253 8.98522 3.06124 7.99396 3.06 6.96Z"
                  fill="#4B5563"
                />
              </svg>
              <input
                className="relative text-sm leading-none text-gray-600 bg-white  rounded  w-full px-10 py-4 outline-none"
                type="text"
                name
                id
                placeholder="Search"
              />
            </div>
          </div>
          <div className="lg:max-w-[548px] w-full mx-auto bg-gray-200 mt-3 relative">
            <svg
              className="absolute right-2 top-2 cursor-pointer"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.06046 8.00032L12.0292 5.03157C12.1701 4.89093 12.2494 4.70007 12.2495 4.50099C12.2497 4.30191 12.1708 4.11091 12.0301 3.97001C11.8895 3.82912 11.6986 3.74986 11.4996 3.74969C11.3005 3.74951 11.1095 3.82843 10.9686 3.96907L7.99984 6.93782L5.03109 3.96907C4.89019 3.82818 4.69909 3.74902 4.49984 3.74902C4.30058 3.74902 4.10948 3.82818 3.96859 3.96907C3.82769 4.10997 3.74854 4.30107 3.74854 4.50032C3.74854 4.69958 3.82769 4.89068 3.96859 5.03157L6.93734 8.00032L3.96859 10.9691C3.82769 11.11 3.74854 11.3011 3.74854 11.5003C3.74854 11.6996 3.82769 11.8907 3.96859 12.0316C4.10948 12.1725 4.30058 12.2516 4.49984 12.2516C4.69909 12.2516 4.89019 12.1725 5.03109 12.0316L7.99984 9.06282L10.9686 12.0316C11.1095 12.1725 11.3006 12.2516 11.4998 12.2516C11.6991 12.2516 11.8902 12.1725 12.0311 12.0316C12.172 11.8907 12.2511 11.6996 12.2511 11.5003C12.2511 11.3011 12.172 11.11 12.0311 10.9691L9.06046 8.00032Z"
                fill="#1F2937"
              />
            </svg>
            <div className="relative">
              <svg
                className="absolute z-20 cursor-pointer top-[18px] left-4"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2716 13.1684L11.3313 10.2281C12.0391 9.28574 12.4213 8.13865 12.42 6.96C12.42 3.94938 9.97063 1.5 6.96 1.5C3.94938 1.5 1.5 3.94938 1.5 6.96C1.5 9.97063 3.94938 12.42 6.96 12.42C8.13865 12.4213 9.28574 12.0391 10.2281 11.3313L13.1684 14.2716C13.3173 14.4046 13.5114 14.4756 13.711 14.47C13.9105 14.4645 14.1004 14.3827 14.2415 14.2415C14.3827 14.1004 14.4645 13.9105 14.47 13.711C14.4756 13.5114 14.4046 13.3173 14.2716 13.1684ZM3.06 6.96C3.06 6.18865 3.28873 5.43463 3.71727 4.79328C4.14581 4.15192 4.7549 3.65205 5.46754 3.35687C6.18017 3.06169 6.96433 2.98446 7.72085 3.13494C8.47738 3.28542 9.17229 3.65686 9.71772 4.20228C10.2631 4.74771 10.6346 5.44262 10.7851 6.19915C10.9355 6.95567 10.8583 7.73983 10.5631 8.45247C10.268 9.1651 9.76808 9.77419 9.12673 10.2027C8.48537 10.6313 7.73135 10.86 6.96 10.86C5.92604 10.8588 4.93478 10.4475 4.20365 9.71635C3.47253 8.98522 3.06124 7.99396 3.06 6.96Z"
                  fill="#4B5563"
                />
              </svg>
              <input
                className="relative text-sm leading-none text-gray-600 bg-white rounded  w-full px-10 py-4 outline-none"
                type="text"
                name
                id
                placeholder="Pro..."
              />
            </div>
            <div className="relative bg-white px-4  py-3 border-t border-b border-gray-200 flex gap-x-4 flex-wrap gap-y-4">
              <p className="text-xs leading-3 text-white px-2 py-1 w-24 h-6 bg-indigo-700 rounded relative hover:bg-indigo-600 transform duration-300 ease-in-out">
                Profile Tag
                <svg
                  className="absolute right-2 top-[4px] cursor-pointer"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92821 7.00016L10.5259 4.40251C10.6491 4.27944 10.7185 4.11244 10.7186 3.93824C10.7188 3.76405 10.6498 3.59692 10.5267 3.47364C10.4036 3.35035 10.2366 3.28101 10.0624 3.28085C9.88823 3.2807 9.7211 3.34975 9.59782 3.47282L7.00016 6.07047L4.40251 3.47282C4.27922 3.34953 4.11201 3.28027 3.93766 3.28027C3.76331 3.28027 3.5961 3.34953 3.47282 3.47282C3.34953 3.5961 3.28027 3.76331 3.28027 3.93766C3.28027 4.11201 3.34953 4.27922 3.47282 4.40251L6.07047 7.00016L3.47282 9.59782C3.34953 9.7211 3.28027 9.88831 3.28027 10.0627C3.28027 10.237 3.34953 10.4042 3.47282 10.5275C3.5961 10.6508 3.76331 10.72 3.93766 10.72C4.11201 10.72 4.27922 10.6508 4.40251 10.5275L7.00016 7.92985L9.59782 10.5275C9.7211 10.6508 9.88831 10.72 10.0627 10.72C10.237 10.72 10.4042 10.6508 10.5275 10.5275C10.6508 10.4042 10.72 10.237 10.72 10.0627C10.72 9.88831 10.6508 9.7211 10.5275 9.59782L7.92821 7.00016Z"
                    fill="white"
                  />
                </svg>
              </p>
              <p className="text-xs leading-3 text-white px-2 py-1 w-24 h-6 bg-indigo-700 rounded relative hover:bg-indigo-600 transform duration-300 ease-in-out">
                Computing
                <svg
                  className="absolute right-2 top-[4px] cursor-pointer"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92821 7.00016L10.5259 4.40251C10.6491 4.27944 10.7185 4.11244 10.7186 3.93824C10.7188 3.76405 10.6498 3.59692 10.5267 3.47364C10.4036 3.35035 10.2366 3.28101 10.0624 3.28085C9.88823 3.2807 9.7211 3.34975 9.59782 3.47282L7.00016 6.07047L4.40251 3.47282C4.27922 3.34953 4.11201 3.28027 3.93766 3.28027C3.76331 3.28027 3.5961 3.34953 3.47282 3.47282C3.34953 3.5961 3.28027 3.76331 3.28027 3.93766C3.28027 4.11201 3.34953 4.27922 3.47282 4.40251L6.07047 7.00016L3.47282 9.59782C3.34953 9.7211 3.28027 9.88831 3.28027 10.0627C3.28027 10.237 3.34953 10.4042 3.47282 10.5275C3.5961 10.6508 3.76331 10.72 3.93766 10.72C4.11201 10.72 4.27922 10.6508 4.40251 10.5275L7.00016 7.92985L9.59782 10.5275C9.7211 10.6508 9.88831 10.72 10.0627 10.72C10.237 10.72 10.4042 10.6508 10.5275 10.5275C10.6508 10.4042 10.72 10.237 10.72 10.0627C10.72 9.88831 10.6508 9.7211 10.5275 9.59782L7.92821 7.00016Z"
                    fill="white"
                  />
                </svg>
              </p>
              <p className="text-xs leading-3 text-white px-2 py-1 w-[114px] h-6 bg-indigo-700 rounded relative hover:bg-indigo-600 transform duration-300 ease-in-out">
                UX/UI Design
                <svg
                  className="absolute right-2 top-[4px] cursor-pointer"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92821 7.00016L10.5259 4.40251C10.6491 4.27944 10.7185 4.11244 10.7186 3.93824C10.7188 3.76405 10.6498 3.59692 10.5267 3.47364C10.4036 3.35035 10.2366 3.28101 10.0624 3.28085C9.88823 3.2807 9.7211 3.34975 9.59782 3.47282L7.00016 6.07047L4.40251 3.47282C4.27922 3.34953 4.11201 3.28027 3.93766 3.28027C3.76331 3.28027 3.5961 3.34953 3.47282 3.47282C3.34953 3.5961 3.28027 3.76331 3.28027 3.93766C3.28027 4.11201 3.34953 4.27922 3.47282 4.40251L6.07047 7.00016L3.47282 9.59782C3.34953 9.7211 3.28027 9.88831 3.28027 10.0627C3.28027 10.237 3.34953 10.4042 3.47282 10.5275C3.5961 10.6508 3.76331 10.72 3.93766 10.72C4.11201 10.72 4.27922 10.6508 4.40251 10.5275L7.00016 7.92985L9.59782 10.5275C9.7211 10.6508 9.88831 10.72 10.0627 10.72C10.237 10.72 10.4042 10.6508 10.5275 10.5275C10.6508 10.4042 10.72 10.237 10.72 10.0627C10.72 9.88831 10.6508 9.7211 10.5275 9.59782L7.92821 7.00016Z"
                    fill="white"
                  />
                </svg>
              </p>
              <p className="text-xs leading-3 text-white px-2 py-1 w-24 h-6 bg-indigo-700 rounded relative hover:bg-indigo-600 transform duration-300 ease-in-out">
                Illustrations
                <svg
                  className="absolute right-2 top-[4px] cursor-pointer"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92821 7.00016L10.5259 4.40251C10.6491 4.27944 10.7185 4.11244 10.7186 3.93824C10.7188 3.76405 10.6498 3.59692 10.5267 3.47364C10.4036 3.35035 10.2366 3.28101 10.0624 3.28085C9.88823 3.2807 9.7211 3.34975 9.59782 3.47282L7.00016 6.07047L4.40251 3.47282C4.27922 3.34953 4.11201 3.28027 3.93766 3.28027C3.76331 3.28027 3.5961 3.34953 3.47282 3.47282C3.34953 3.5961 3.28027 3.76331 3.28027 3.93766C3.28027 4.11201 3.34953 4.27922 3.47282 4.40251L6.07047 7.00016L3.47282 9.59782C3.34953 9.7211 3.28027 9.88831 3.28027 10.0627C3.28027 10.237 3.34953 10.4042 3.47282 10.5275C3.5961 10.6508 3.76331 10.72 3.93766 10.72C4.11201 10.72 4.27922 10.6508 4.40251 10.5275L7.00016 7.92985L9.59782 10.5275C9.7211 10.6508 9.88831 10.72 10.0627 10.72C10.237 10.72 10.4042 10.6508 10.5275 10.5275C10.6508 10.4042 10.72 10.237 10.72 10.0627C10.72 9.88831 10.6508 9.7211 10.5275 9.59782L7.92821 7.00016Z"
                    fill="white"
                  />
                </svg>
              </p>
              <p className="text-xs leading-3 text-white px-2 py-1 w-24 h-6 bg-indigo-700 rounded relative hover:bg-indigo-600 transform duration-300 ease-in-out">
                Designing
                <svg
                  className="absolute right-2 top-[4px] cursor-pointer"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92821 7.00016L10.5259 4.40251C10.6491 4.27944 10.7185 4.11244 10.7186 3.93824C10.7188 3.76405 10.6498 3.59692 10.5267 3.47364C10.4036 3.35035 10.2366 3.28101 10.0624 3.28085C9.88823 3.2807 9.7211 3.34975 9.59782 3.47282L7.00016 6.07047L4.40251 3.47282C4.27922 3.34953 4.11201 3.28027 3.93766 3.28027C3.76331 3.28027 3.5961 3.34953 3.47282 3.47282C3.34953 3.5961 3.28027 3.76331 3.28027 3.93766C3.28027 4.11201 3.34953 4.27922 3.47282 4.40251L6.07047 7.00016L3.47282 9.59782C3.34953 9.7211 3.28027 9.88831 3.28027 10.0627C3.28027 10.237 3.34953 10.4042 3.47282 10.5275C3.5961 10.6508 3.76331 10.72 3.93766 10.72C4.11201 10.72 4.27922 10.6508 4.40251 10.5275L7.00016 7.92985L9.59782 10.5275C9.7211 10.6508 9.88831 10.72 10.0627 10.72C10.237 10.72 10.4042 10.6508 10.5275 10.5275C10.6508 10.4042 10.72 10.237 10.72 10.0627C10.72 9.88831 10.6508 9.7211 10.5275 9.59782L7.92821 7.00016Z"
                    fill="white"
                  />
                </svg>
              </p>
              <p className="text-xs leading-3 text-white px-2 py-1 w-24 h-6 bg-indigo-700 rounded relative hover:bg-indigo-600 transform duration-300 ease-in-out">
                High Fidelity
                <svg
                  className="absolute right-2 top-[4px] cursor-pointer"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92821 7.00016L10.5259 4.40251C10.6491 4.27944 10.7185 4.11244 10.7186 3.93824C10.7188 3.76405 10.6498 3.59692 10.5267 3.47364C10.4036 3.35035 10.2366 3.28101 10.0624 3.28085C9.88823 3.2807 9.7211 3.34975 9.59782 3.47282L7.00016 6.07047L4.40251 3.47282C4.27922 3.34953 4.11201 3.28027 3.93766 3.28027C3.76331 3.28027 3.5961 3.34953 3.47282 3.47282C3.34953 3.5961 3.28027 3.76331 3.28027 3.93766C3.28027 4.11201 3.34953 4.27922 3.47282 4.40251L6.07047 7.00016L3.47282 9.59782C3.34953 9.7211 3.28027 9.88831 3.28027 10.0627C3.28027 10.237 3.34953 10.4042 3.47282 10.5275C3.5961 10.6508 3.76331 10.72 3.93766 10.72C4.11201 10.72 4.27922 10.6508 4.40251 10.5275L7.00016 7.92985L9.59782 10.5275C9.7211 10.6508 9.88831 10.72 10.0627 10.72C10.237 10.72 10.4042 10.6508 10.5275 10.5275C10.6508 10.4042 10.72 10.237 10.72 10.0627C10.72 9.88831 10.6508 9.7211 10.5275 9.59782L7.92821 7.00016Z"
                    fill="white"
                  />
                </svg>
              </p>
            </div>
            <div className="bg-white">
              <div className=" px-4 py-4">
                <p className="text-xs font-medium leading-3 text-gray-800">
                  Popular Tags
                </p>
              </div>
              <div className="flex items-center gap-x-4 mt-5  px-4 ">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5625 12.375C0.562965 12.8224 0.740904 13.2514 1.05727 13.5677C1.37364 13.8841 1.80259 14.062 2.25 14.0625H6.95672L6.81609 15.1875H5.0625C4.91332 15.1875 4.77024 15.2468 4.66475 15.3523C4.55926 15.4577 4.5 15.6008 4.5 15.75C4.5 15.8992 4.55926 16.0423 4.66475 16.1477C4.77024 16.2532 4.91332 16.3125 5.0625 16.3125H12.9375C13.0867 16.3125 13.2298 16.2532 13.3352 16.1477C13.4407 16.0423 13.5 15.8992 13.5 15.75C13.5 15.6008 13.4407 15.4577 13.3352 15.3523C13.2298 15.2468 13.0867 15.1875 12.9375 15.1875H11.1839L11.0433 14.0625H15.75C16.1974 14.062 16.6264 13.8841 16.9427 13.5677C17.2591 13.2514 17.437 12.8224 17.4375 12.375V10.6875H0.5625V12.375ZM9 11.8125C9.11125 11.8125 9.22001 11.8455 9.31251 11.9073C9.40501 11.9691 9.47711 12.057 9.51968 12.1597C9.56226 12.2625 9.5734 12.3756 9.55169 12.4847C9.52999 12.5939 9.47641 12.6941 9.39775 12.7727C9.31908 12.8514 9.21885 12.905 9.10974 12.9267C9.00062 12.9484 8.88752 12.9373 8.78474 12.8947C8.68196 12.8521 8.59411 12.78 8.5323 12.6875C8.47049 12.595 8.4375 12.4863 8.4375 12.375C8.4375 12.2258 8.49676 12.0827 8.60225 11.9773C8.70774 11.8718 8.85082 11.8125 9 11.8125Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M17.4375 3.375C17.437 2.92759 17.2591 2.49864 16.9427 2.18227C16.6264 1.8659 16.1974 1.68797 15.75 1.6875H2.25C1.80259 1.68797 1.37364 1.8659 1.05727 2.18227C0.740904 2.49864 0.562965 2.92759 0.5625 3.375V10.125H17.4375V3.375Z"
                    fill="#4B5563"
                  />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Software Engineering
                </p>
              </div>
              <div className="flex items-center gap-x-4  mt-5  px-4 ">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4306 9.81563C14.2548 9.41133 13.9841 9.05625 13.4427 8.75742C13.1629 8.59921 12.8623 8.48088 12.5497 8.40586C12.76 8.30814 12.9535 8.17761 13.1228 8.01914C13.3717 7.79665 13.5603 7.51488 13.6712 7.2C13.7733 6.88001 13.815 6.54383 13.7943 6.20859C13.7556 5.61797 13.6396 5.04492 13.3302 4.63359C13.0208 4.22227 12.5849 3.90586 12.0083 3.68438C11.5654 3.51562 11.1118 3.41016 10.4087 3.37148V1.125H9.00246V3.375H7.87746V1.125H6.43605V3.375H3.375V5.0625H4.3548C4.66066 5.0625 4.86809 5.09063 4.97355 5.14336C5.07169 5.18535 5.15238 5.25983 5.20207 5.3543C5.24777 5.44219 5.26887 5.64961 5.26887 5.96953V12.0586C5.26887 12.375 5.24777 12.5789 5.20207 12.6703C5.15637 12.7617 5.13176 12.8426 5.02277 12.8918C4.91379 12.941 4.91027 12.9375 4.60793 12.9375H3.6798L3.375 14.625H6.43359V16.875H7.875V14.625H9V16.875H10.4062V14.6109C11.3203 14.5652 11.9707 14.4457 12.4945 14.2488C13.173 13.9957 13.6934 13.6266 14.066 13.1414C14.4387 12.6562 14.5582 11.9145 14.5909 11.3414C14.6145 10.8316 14.5898 10.1742 14.4306 9.81563ZM7.875 5.27344H9V7.875H7.875V5.27344ZM7.875 12.7266V9.5625H9V12.7266H7.875ZM10.4062 5.41055C10.6172 5.49844 10.7543 5.67422 10.8914 5.85703C11.0426 6.05742 11.1199 6.32461 11.1199 6.60938C11.1199 6.88359 11.018 7.11914 10.8562 7.33008C10.7227 7.50234 10.6172 7.62188 10.4062 7.72031V5.41055ZM11.4187 11.9742C11.1445 12.2168 10.9863 12.3293 10.6418 12.4594C10.5647 12.4865 10.4861 12.5088 10.4062 12.5262V9.61523C10.5438 9.63559 10.6776 9.67585 10.8035 9.73477C11.0777 9.85078 11.3379 9.97734 11.4996 10.1988C11.6789 10.4532 11.777 10.756 11.7809 11.0672C11.7798 11.4504 11.6814 11.7422 11.4177 11.9742H11.4187Z"
                    fill="#4B5563"
                  />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Crypto Currency
                </p>
              </div>
              <div className="flex items-center gap-x-4  mt-5  px-4 ">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9848 8.62668C16.2392 5.25555 15.117 3.45625 13.4523 2.96477C13.1024 2.86213 12.7394 2.81085 12.3748 2.81254C11.8928 2.81254 11.473 2.92996 11.029 3.05442C10.4939 3.20453 9.88606 3.37504 8.99977 3.37504C8.11348 3.37504 7.50528 3.20488 6.96915 3.05477C6.52477 2.92996 6.10536 2.81254 5.62477 2.81254C5.24769 2.81123 4.87226 2.86235 4.50926 2.96442C2.8534 3.45379 1.73192 5.25238 0.975353 8.62457C0.161837 12.2534 0.562267 14.5445 2.09824 15.0761C2.30879 15.1503 2.53032 15.1886 2.75356 15.1893C3.80578 15.1893 4.64953 14.3129 5.2261 13.5953C5.87754 12.7832 6.64008 12.3712 8.99977 12.3712C11.1074 12.3712 11.9796 12.657 12.733 13.5953C13.2066 14.1852 13.6541 14.598 14.1006 14.8578C14.6944 15.203 15.2878 15.2796 15.864 15.0817C16.7718 14.772 17.2921 13.9532 17.4109 12.6475C17.5013 11.6463 17.362 10.3311 16.9848 8.62668ZM7.31227 8.43754H6.18727V9.56254C6.18727 9.71172 6.12801 9.8548 6.02252 9.96029C5.91703 10.0658 5.77395 10.125 5.62477 10.125C5.47558 10.125 5.33251 10.0658 5.22702 9.96029C5.12153 9.8548 5.06227 9.71172 5.06227 9.56254V8.43754H3.93727C3.78808 8.43754 3.64501 8.37828 3.53952 8.27279C3.43403 8.1673 3.37477 8.02422 3.37477 7.87504C3.37477 7.72586 3.43403 7.58278 3.53952 7.47729C3.64501 7.3718 3.78808 7.31254 3.93727 7.31254H5.06227V6.18754C5.06227 6.03836 5.12153 5.89528 5.22702 5.78979C5.33251 5.6843 5.47558 5.62504 5.62477 5.62504C5.77395 5.62504 5.91703 5.6843 6.02252 5.78979C6.12801 5.89528 6.18727 6.03836 6.18727 6.18754V7.31254H7.31227C7.46145 7.31254 7.60453 7.3718 7.71002 7.47729C7.81551 7.58278 7.87477 7.72586 7.87477 7.87504C7.87477 8.02422 7.81551 8.1673 7.71002 8.27279C7.60453 8.37828 7.46145 8.43754 7.31227 8.43754ZM10.2654 8.57817C10.1263 8.57817 9.99039 8.53693 9.87476 8.45967C9.75913 8.38241 9.66901 8.27259 9.61579 8.14411C9.56258 8.01564 9.54865 7.87426 9.57578 7.73787C9.60291 7.60147 9.66988 7.47619 9.76821 7.37786C9.86655 7.27952 9.99183 7.21256 10.1282 7.18543C10.2646 7.1583 10.406 7.17222 10.5345 7.22544C10.663 7.27866 10.7728 7.36878 10.85 7.48441C10.9273 7.60003 10.9685 7.73598 10.9685 7.87504C10.9685 8.06152 10.8944 8.24036 10.7626 8.37222C10.6307 8.50409 10.4519 8.57817 10.2654 8.57817ZM11.8123 10.125C11.6731 10.125 11.5371 10.0838 11.4215 10.0064C11.3058 9.92908 11.2157 9.81916 11.1625 9.69058C11.1093 9.562 11.0955 9.42054 11.1228 9.28409C11.1501 9.14765 11.2172 9.02237 11.3157 8.92411C11.4142 8.82585 11.5397 8.75902 11.6762 8.73209C11.8127 8.70516 11.9541 8.71933 12.0826 8.77282C12.211 8.82631 12.3207 8.9167 12.3978 9.03256C12.4748 9.14842 12.5157 9.28453 12.5154 9.42367C12.5149 9.60985 12.4406 9.78824 12.3088 9.91972C12.177 10.0512 11.9984 10.125 11.8123 10.125ZM11.8123 7.03129C11.6732 7.03129 11.5373 6.99005 11.4216 6.91279C11.306 6.83553 11.2159 6.72572 11.1627 6.59724C11.1095 6.46876 11.0955 6.32739 11.1227 6.19099C11.1498 6.0546 11.2168 5.92931 11.3151 5.83098C11.4134 5.73265 11.5387 5.66568 11.6751 5.63855C11.8115 5.61142 11.9529 5.62534 12.0813 5.67856C12.2098 5.73178 12.3196 5.8219 12.3969 5.93753C12.4742 6.05316 12.5154 6.1891 12.5154 6.32817C12.5154 6.51465 12.4413 6.69349 12.3095 6.82535C12.1776 6.95721 11.9988 7.03129 11.8123 7.03129ZM13.3591 8.57817C13.2201 8.57817 13.0841 8.53693 12.9685 8.45967C12.8529 8.38241 12.7628 8.27259 12.7095 8.14411C12.6563 8.01564 12.6424 7.87426 12.6695 7.73787C12.6967 7.60147 12.7636 7.47619 12.862 7.37786C12.9603 7.27952 13.0856 7.21256 13.222 7.18543C13.3584 7.1583 13.4997 7.17222 13.6282 7.22544C13.7567 7.27866 13.8665 7.36878 13.9438 7.48441C14.021 7.60003 14.0623 7.73598 14.0623 7.87504C14.0623 8.06152 13.9882 8.24036 13.8563 8.37222C13.7245 8.50409 13.5456 8.57817 13.3591 8.57817Z"
                    fill="#4B5563"
                  />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  E-Gaming
                </p>
              </div>
              <div className="flex items-center gap-x-4  mt-5  px-4 ">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.10528 9.53711L7.95215 12.9016H7.94864L7.05566 15.4715C7.11895 15.4891 7.17871 15.5031 7.24199 15.5207H7.25254C7.82024 15.6721 8.40524 15.7489 8.99278 15.7492C9.28579 15.7514 9.57852 15.7302 9.86817 15.6859C10.2558 15.6373 10.6382 15.5538 11.0108 15.4363C11.1022 15.4082 11.1936 15.3766 11.285 15.3449C11.1865 15.134 10.9756 14.6664 10.965 14.6453L9.10528 9.53711Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M2.84063 6.3457C2.48906 7.14023 2.25 8.11758 2.25 9C2.25 9.22148 2.26055 9.44297 2.28164 9.66094C2.52422 12.1641 4.14141 14.2664 6.36328 15.2121C6.45469 15.2508 6.54961 15.2895 6.64453 15.3246L3.375 6.34922C3.09375 6.33867 3.04102 6.35625 2.84063 6.3457Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M15.1242 6.16641C14.973 5.84079 14.7954 5.52804 14.5934 5.23126C14.5371 5.14688 14.4738 5.06251 14.4141 4.97813C13.6523 3.9557 12.6178 3.1686 11.4293 2.70704C10.6541 2.40381 9.82888 2.24879 8.99648 2.25001C7.98812 2.25003 6.99264 2.47655 6.08355 2.91284C5.17446 3.34913 4.37498 3.98405 3.74414 4.77071C3.51562 5.05399 3.30989 5.35493 3.12891 5.67071C3.62812 5.67423 4.24688 5.67423 4.31719 5.67423C4.95352 5.67423 5.93438 5.59688 5.93438 5.59688C6.26484 5.57579 6.3 6.05743 5.97305 6.0961C5.97305 6.0961 5.64258 6.13477 5.27695 6.15235L7.48828 12.7266L8.81719 8.74337L7.875 6.15587C7.54453 6.13829 7.23867 6.09962 7.23867 6.09962C6.9082 6.08204 6.95039 5.5793 7.27383 5.6004C7.27383 5.6004 8.27578 5.67774 8.87344 5.67774C9.50977 5.67774 10.4906 5.6004 10.4906 5.6004C10.8176 5.5793 10.8598 6.06095 10.5293 6.09962C10.5293 6.09962 10.2023 6.13829 9.83672 6.15587L12.027 12.6809L12.6352 10.6559C12.941 9.86837 13.0957 9.21798 13.0957 8.69766C13.0957 7.94884 12.825 7.42852 12.593 7.02423C12.2871 6.52149 11.9988 6.09962 11.9988 5.60391C11.9988 5.04493 12.4207 4.52462 13.0184 4.52462H13.0957C14.0168 4.50001 14.3191 5.41407 14.3578 6.03634V6.05743C14.3719 6.31055 14.3613 6.49688 14.3613 6.71837C14.3613 7.33009 14.2453 8.02266 13.9008 8.89102L12.5297 12.8566L11.7457 15.1664C11.809 15.1383 11.8687 15.1102 11.932 15.0785C13.9254 14.1152 15.3773 12.1957 15.6832 9.9211C15.7286 9.61854 15.7509 9.31298 15.75 9.00704C15.7513 8.02583 15.5377 7.05623 15.1242 6.16641Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M9 1.6875C10.6871 1.68837 12.322 2.2724 13.6278 3.34066C14.9336 4.40891 15.83 5.89571 16.1651 7.54918C16.5002 9.20265 16.2534 10.9211 15.4666 12.4135C14.6798 13.9059 13.4013 15.0804 11.8477 15.738C10.0606 16.4933 8.04675 16.5077 6.24908 15.7781C4.45141 15.0485 3.0172 13.6347 2.26195 11.8477C1.50671 10.0606 1.49229 8.04675 2.22188 6.24908C2.95147 4.45141 4.3653 3.0172 6.15234 2.26195C7.05322 1.88075 8.02179 1.68537 9 1.6875ZM9 1.125C4.65082 1.125 1.125 4.65082 1.125 9C1.125 13.3492 4.65082 16.875 9 16.875C13.3492 16.875 16.875 13.3492 16.875 9C16.875 4.65082 13.3492 1.125 9 1.125Z"
                    fill="#4B5563"
                  />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Wordpress
                </p>
              </div>
              <hr className="border  border-gray-200 my-4" />
              <div className=" px-4 ">
                <p className="text-xs font-medium leading-3 text-gray-800">
                  Recent Tags
                </p>
              </div>
              <div className="flex items-center gap-x-4 mt-5  px-4 ">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1875 1.125H2.8125C2.21596 1.12565 1.64404 1.36291 1.22223 1.78473C0.800413 2.20654 0.563151 2.77846 0.5625 3.375V14.625C0.563151 15.2215 0.800413 15.7935 1.22223 16.2153C1.64404 16.6371 2.21596 16.8743 2.8125 16.875H15.1875C15.784 16.8743 16.356 16.6371 16.7778 16.2153C17.1996 15.7935 17.4368 15.2215 17.4375 14.625V3.375C17.4368 2.77846 17.1996 2.20654 16.7778 1.78473C16.356 1.36291 15.784 1.12565 15.1875 1.125ZM3.375 9C3.25846 9 3.1448 8.9638 3.04972 8.89641C2.95464 8.82902 2.88284 8.73376 2.84425 8.6238C2.80565 8.51383 2.80216 8.3946 2.83426 8.28256C2.86636 8.17053 2.93246 8.07124 3.02344 7.9984L5.28715 6.1875L3.02344 4.3766C2.96573 4.33043 2.91768 4.27335 2.88203 4.20861C2.84638 4.14388 2.82383 4.07275 2.81567 3.9993C2.80751 3.92584 2.81389 3.8515 2.83446 3.78052C2.85503 3.70953 2.88938 3.6433 2.93555 3.58559C2.98171 3.52788 3.0388 3.47982 3.10354 3.44418C3.16827 3.40853 3.2394 3.38598 3.31285 3.37782C3.3863 3.36965 3.46065 3.37604 3.53163 3.39661C3.60261 3.41718 3.66885 3.45153 3.72656 3.4977L6.53906 5.7477C6.60501 5.80039 6.65826 5.86725 6.69485 5.94333C6.73144 6.0194 6.75044 6.10273 6.75044 6.18715C6.75044 6.27156 6.73144 6.3549 6.69485 6.43097C6.65826 6.50705 6.60501 6.57391 6.53906 6.6266L3.72656 8.8766C3.6268 8.95648 3.5028 9 3.375 9ZM9 9H6.75C6.60082 9 6.45774 8.94074 6.35225 8.83525C6.24676 8.72976 6.1875 8.58668 6.1875 8.4375C6.1875 8.28832 6.24676 8.14524 6.35225 8.03975C6.45774 7.93426 6.60082 7.875 6.75 7.875H9C9.14918 7.875 9.29226 7.93426 9.39775 8.03975C9.50324 8.14524 9.5625 8.28832 9.5625 8.4375C9.5625 8.58668 9.50324 8.72976 9.39775 8.83525C9.29226 8.94074 9.14918 9 9 9Z"
                    fill="#4B5563"
                  />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Programming
                </p>
              </div>
              <div className="flex items-center gap-x-4  mt-5  px-4 pb-4">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3125 12.375H11.25C11.1008 12.375 10.9577 12.4343 10.8523 12.5398C10.7468 12.6452 10.6875 12.7883 10.6875 12.9375C10.6875 13.3851 10.5097 13.8143 10.1932 14.1307C9.87678 14.4472 9.44755 14.625 9 14.625C8.55245 14.625 8.12322 14.4472 7.80676 14.1307C7.49029 13.8143 7.3125 13.3851 7.3125 12.9375C7.3125 12.7883 7.25324 12.6452 7.14775 12.5398C7.04226 12.4343 6.89918 12.375 6.75 12.375H1.6875C1.53832 12.375 1.39524 12.4343 1.28975 12.5398C1.18426 12.6452 1.125 12.7883 1.125 12.9375V15.1875C1.12565 15.784 1.36291 16.356 1.78473 16.7778C2.20654 17.1996 2.77846 17.4368 3.375 17.4375H14.625C15.2215 17.4368 15.7935 17.1996 16.2153 16.7778C16.6371 16.356 16.8743 15.784 16.875 15.1875V12.9375C16.875 12.7883 16.8157 12.6452 16.7102 12.5398C16.6048 12.4343 16.4617 12.375 16.3125 12.375Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M16.856 6.60516L15.7363 2.40645C15.5134 1.25121 14.6791 0.5625 13.5 0.5625H4.5C3.90937 0.5625 3.41016 0.727383 3.01992 1.05258C2.62969 1.37777 2.37867 1.82813 2.26406 2.40469L1.14398 6.60516C1.13135 6.6524 1.12497 6.7011 1.125 6.75V8.4375C1.125 9.67816 2.13434 11.25 3.375 11.25H14.625C15.8657 11.25 16.875 9.67816 16.875 8.4375V6.75C16.875 6.7011 16.8687 6.6524 16.856 6.60516ZM15.4888 6.1875H11.25C11.1017 6.18675 10.9591 6.24491 10.8537 6.34919C10.7482 6.45347 10.6884 6.59536 10.6875 6.74367C10.6875 7.19123 10.5097 7.62045 10.1932 7.93691C9.87677 8.25338 9.44755 8.43117 9 8.43117C8.55245 8.43117 8.12322 8.25338 7.80676 7.93691C7.49029 7.62045 7.3125 7.19123 7.3125 6.74367C7.31157 6.59536 7.25181 6.45347 7.14634 6.34919C7.04087 6.24491 6.89832 6.18675 6.75 6.1875H2.51121C2.50042 6.18749 2.48978 6.185 2.48011 6.18023C2.47043 6.17545 2.46199 6.16851 2.45543 6.15994C2.44887 6.15137 2.44437 6.14141 2.44228 6.13083C2.44018 6.12025 2.44055 6.10932 2.44336 6.09891L3.3648 2.63672C3.48961 1.98949 3.85031 1.6875 4.5 1.6875H13.5C14.1536 1.6875 14.5139 1.98738 14.6338 2.63145L15.5566 6.09891C15.5594 6.10932 15.5598 6.12025 15.5577 6.13083C15.5556 6.14141 15.5511 6.15137 15.5446 6.15994C15.538 6.16851 15.5296 6.17545 15.5199 6.18023C15.5102 6.185 15.4996 6.18749 15.4888 6.1875Z"
                    fill="#4B5563"
                  />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Project Management
                </p>
              </div>
            </div>
            <div className="mt-3 mr-1">
              <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white  w-full ">
                Search
              </button>
            </div>
          </div>
        </div>

        <style>
          {`
     body{
       background:rgb(243 244 246);
     }
     `}
        </style>
      </div>
    </>
  );
}

export default Search;