export default function Manage() {
    return (
        <div className='manage-container'>
            <div className="manage-title">
                <h1>MANAGE</h1>
            </div>

            <div className="card-container">
                <img className="card-image" src="" alt="" />
                <div className="card-list-container">
                    <ul className="card-list">
                        <li>
                            NICKNAME:
                        </li>
                        <li>
                            YEAR:
                        </li>
                        <li>
                            MAKE:
                        </li>
                        <li>
                            MODEL:
                        </li>
                    </ul>
                </div>

                <div className="card-menu-container">
                    <div className="add-option">
                        <img src="" alt="" />
                    </div>
                    <div className="edit-option">
                        <img src="" alt="" />
                    </div>
                    <div className="delete-option">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>

            <img className="add-item" src="" alt="" />
        </div>
    )
}