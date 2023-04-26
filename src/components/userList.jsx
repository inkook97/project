import React from "react";

function User({ user, onToggle, onRemove }) {
    return (
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'yellowgreen' : 'black'
            }}
                onClick={() => onToggle(user.id)}>{user.username}</b> &nbsp; &nbsp;
            <span>{user.email}</span> &nbsp;
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
};

function UserList({ users, onToggle, onRemove }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default UserList