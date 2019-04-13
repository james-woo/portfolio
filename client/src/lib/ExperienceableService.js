export default class ExperienceableService {
  constructor(resource) {
    this.resource = resource;
  }

  async create(payload) {
    try {
      await window
        .fetch("/api/" + this.resource + "s/", {
          headers: {
            accepts: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include",
          method: "post",
          body: JSON.stringify({
            [this.resource]: {
              title: payload.title,
              image: payload.Image,
              start_time: payload.start_time,
              end_time: payload.end_time,
              content: payload.content
            }
          })
        })
        .then(response => {
          if (response.ok) {
            alert("Created successfully");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  async update(id, payload) {
    try {
      await window
        .fetch("/api/" + this.resource + "s/" + id, {
          headers: {
            accepts: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include",
          method: "put",
          body: JSON.stringify({
            [this.resource]: {
              title: payload.title,
              image: payload.image,
              start_time: payload.start_time,
              end_time: payload.end_time,
              content: payload.content
            }
          })
        })
        .then(response => {
          if (response.ok) {
            alert("Saved successfully");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  async delete(id) {
    try {
      await window
        .fetch("/api/" + this.resource + "s/" + id, {
          headers: {
            accepts: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include",
          method: "delete"
        })
        .then(response => {
          if (response.ok) {
            alert("Deleted successfully");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }
}
