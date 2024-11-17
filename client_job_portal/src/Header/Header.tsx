import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconSettings, IconTargetArrow } from "@tabler/icons-react";

const Header = () => {
  return (
    <div className="bg-mine-shaft-950 h-20 w-full text-white flex justify-between px-6 items-center">
      {/* ICONS AND LOGO */}
      <div className="flex gap-1 items-center">
        <div>
          <IconTargetArrow stroke={1.8} className="h-9  w-9  " />
        </div>
        <div className="text-3xl font-semibold">
          Job<span className="text-azure-radiance-700 font-bold">Hunter</span>
        </div>
      </div>

      {/* LANDING PAGE LINKS */}
      <div className="flex gap-5">
        <a href="">Find Jobs</a>
        <a href="">Find Talents</a>
        <a href="">Upload Jobs</a>
        <a href="">About Us</a>
      </div>

      {/* LANDING PAGE PROFILE */}
      <div className="flex gap-5 items-center ">
        <div className="flex gap-2 items-center">
          <div>Shushant</div>
          <div>
         
            <Avatar src="avatar-img.png" alt="it's me" />
           
          </div>
        </div>
        <div className="bg-mine-shaft-900 p-1 rounded-full border  border-white cursor-pointer">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1 rounded-full border  border-white cursor-pointer">
        <Indicator size={9} offset={5} color="azure-radiance.7" processing>
          <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
