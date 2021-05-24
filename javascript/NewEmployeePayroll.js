window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});


const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>"+
        "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    const innerHtml = `${headerHtml}
<tr>
    <td><img class="profile" src="../assets/profile-images/Ellipse -1.png" alt="profile4"></td>
    <td>Keerthana Jujjavarapu</td>
    <td>Female</td>
    <td><div class="dept-label">HR</div>
    <div class="dept-label">Finance</div></td>
    <td>3000000</td>
    <td>1 Nov 2020</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
</tr>`
;
document.querySelector('#table-display').innerHTML = innerHtml;
}