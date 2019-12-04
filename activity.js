Activity = function(Day, Activity_Description, Duration, Color) {

  this.currentHeight = 0;
  this.currentCube = 0;

  this.act_desc = Activity_Description;
  this.cubeSize = Duration;

  if (this.currentHeight >= 1440) {
      return console.log('Limit Reached');
  };

  var cubeGeo = new THREE.BoxBufferGeometry(120, this.cubeSize, 120);
  var cubeMat = new THREE.MeshPhongMaterial({color: '#FF0000'});
  var mesh = new THREE.Mesh(cubeGeo, cubeMat);

  mesh.position.set(Day, -69 + this.currentHeight, 0);

  if (Color == null){
    console.log(Color);
    cubeMat.color.setHex('0x'+Math.floor(Math.random()*16777215).toString(16));
  }

  else {
    cubeMat.color.setHex(Color.replace('#', '0x'));
  }

  scene.add(mesh);

  this.currentHeight += 60;
  this.currentCube += 1;

  console.log("Current Cube Height:" + this.currentHeight);
  console.log("Current Cube Count:" + this.currentCube);

};

  // create head, neck, and, torso
  // var fromhelper = HELPER.cylinderSkeletonMesh(3, 5, 'blue')
  // var geometry = fromhelper[0];
  // var material = fromhelper[1];
  // var bones = fromhelper[2];

  // var mesh = new THREE.SkinnedMesh( geometry, material );
  // var skeleton = new THREE.Skeleton( bones );
  // mesh.add( bones[ 0 ] );
  // mesh.bind( skeleton );

  // this.root = bones[ 0 ];
  // this.root.position.set(x, y, z);

  // this.head = bones[ 1 ];
  // this.neck = bones[ 2 ];
  // this.neck.position.y = -10;
  // this.torso = bones[ 3 ];
  // this.torso.position.y = -30;
  // this.body_mesh = mesh;
  // this.movement = null;
