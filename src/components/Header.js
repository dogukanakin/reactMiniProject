import { useState } from 'react';

function Header({ money}) {
    return (  
        <>
            <div>
                Harcamak için {money} $ var.
            </div>
        </>
    );
}

export default Header;