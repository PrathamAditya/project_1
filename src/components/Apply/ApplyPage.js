import "./ApplyPage.css";

const ApplyPage = () => {
  return (
    <div class="apply-box">
      <h2>Apply</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""></input>
          <label>Project Name</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required=""></input>
          <label>Project's Website</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required=""></input>
          <label>Project's Twitter</label>
        </div>
        <div class="user-box">
          <input type="email" name="" required=""></input>
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required=""></input>
          <label>No. of Whitelists</label>
        </div>
        <a href="#">Submit</a>
      </form>
    </div>
  );
};

export default ApplyPage;
